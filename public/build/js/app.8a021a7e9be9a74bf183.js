!function(e){function n(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/build/",n(n.s="ET/6")}({"/YkP":function(e,n){e.exports="/build/images/favicon-16x16.4352956d.png"},"4nts":function(e,n){e.exports="/build/images/favicon-32x32.b65514f9.png"},"7dMV":function(e,n,t){function o(e){return t(s(e))}function s(e){var n=i[e];if(!(n+1))throw new Error("Cannot find module '"+e+"'.");return n}var i={"./favicon-16x16.png":"/YkP","./favicon-32x32.png":"4nts","./kindled-inverted.svg":"FCgX","./kindled.svg":"l1oA"};o.keys=function(){return Object.keys(i)},o.resolve=s,e.exports=o,o.id="7dMV"},"ET/6":function(e,n,t){var o=t("7dMV");o.keys().forEach(o),document.addEventListener("DOMContentLoaded",function(){toggleBurgers(),hideMessages(),autoHideMessages(),loadableButtons()}),toggleBurgers=function(){document.querySelectorAll(".navbar-burger").forEach(function(e){e.addEventListener("click",function(){var n=e.dataset.target,t=document.getElementById(n);e.classList.toggle("is-active"),t.classList.toggle("is-active")})})},hideMessages=function(){$messages=document.querySelectorAll(".message button.delete"),$messages.forEach(function(e){e.addEventListener("click",function(){e.parentElement.parentElement.classList.toggle("is-hidden")})})},autoHideMessages=function(){setTimeout(function(){$messages=document.querySelectorAll(".message"),$messages.forEach(function(e){e.classList.toggle("is-hidden")})},5e3)},loadableButtons=function(){$buttons=document.querySelectorAll(".is-loadable"),$buttons.forEach(function(e){e.addEventListener("click",function(){e.classList.add("is-loading"),setTimeout(function(){e.classList.remove("is-loading")},5e3)})})}},FCgX:function(e,n){e.exports="/build/images/kindled-inverted.7c8a42af.svg"},l1oA:function(e,n){e.exports="/build/images/kindled.ac4d20e6.svg"}});