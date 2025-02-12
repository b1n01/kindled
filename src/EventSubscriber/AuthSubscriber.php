<?php

namespace App\EventSubscriber;

use App\Service\Pocket;
use App\Controller\DefaultController;
use App\Service\Credential\Credential;
use App\Controller\AuthenticatedController;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\Event\FilterControllerEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class AuthSubscriber implements EventSubscriberInterface
{
	CONST POCKET_AUTH = [
		'pocket.list',
	];

	CONST EMAIL_AUTH = [
		'send',
	];

	/**
	 * @var UrlGeneratorInterface
	 */
	private $router;

	/**
	 * @var Credential
	 */
	private $credential;

	/**
	 * @param UrlGeneratorInterface $router
	 */
	public function __construct(UrlGeneratorInterface $router, Credential $credential) 
	{
		$this->router = $router;
		$this->credential = $credential;
	}

	public static function getSubscribedEvents() : array
    {
        return [
            KernelEvents::CONTROLLER => 'onKernelController',
        ];
    }

    /**
     * @param  FilterControllerEvent $event [description]
     */
    public function onKernelController(FilterControllerEvent $event)
    {
    	$uri = $event->getRequest()->getUri();
		$route = $event->getRequest()->get('_route');

    	if(in_array($route, self::POCKET_AUTH)){
	        $session = new Session();
	        $accessToken = $session->get(Pocket::ACCESS_TOKEN);
			if(!$accessToken) {
				$redirectUrl = $this->router->generate('auth.pocket.authorize');
				$event->setController(function() use ($redirectUrl) {
	            	return new RedirectResponse($redirectUrl);
	        	});
			}
		}

    	if(in_array($route, self::EMAIL_AUTH)){
	        $from = $this->credential->getFrom();
	        $to = $this->credential->getTo();

			if(!$from || !$to) {
				$redirectUrl = $this->router->generate('auth.credentials.create', ['redirect' => $uri]);
				$event->setController(function() use ($redirectUrl) {
	            	return new RedirectResponse($redirectUrl);
	        	});
			}
		}
    }
}