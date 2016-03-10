/*
 * accordion
 */

App.module.create(
  'sample',
  (function(window, app) {
  'use strict';

  // define module object
  var module = {};

  /***********************************
  * private variables
  */

  /***********************************
  * private methods
  */
  var _handleSampleFunction = function(){
    // I prefer using plain Javascript. No jQuery. I'm so sorry.
    var $main = document.querySelector("main");
    $main.textContent = "See how painless that was?";
    $main.textContent += "— Josh";
  };

  /***********************************
  * public application definition
  */

  /***********************************
  * global app declaration of events and methods
  */

  // module init method;
  // NOTE: important for initializing the module will be called dynamically
  module.init = function() {
    _handleSampleFunction();
  };

  return module;
})(window, window.App)
);