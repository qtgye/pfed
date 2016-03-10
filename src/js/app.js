/*
 * Modular
 */

window.App = window.App || {};

window.App = (function (window, app) {
  'use strict';

  // module handler
  app.module = {};
  // module handler: modules in an observable array
  app.module.items = new ObservableArray([]);
  // define the the add event
  app.module.items.addEventListener("itemadded", function (e) {
    // check if there is an init method to call
    if (app[e.item]) {
      if (app[e.item].init) {
        if ((typeof app[e.item].init === "function") && !app[e.item].isLoaded) {
          app[e.item].init();
        }
      }
    }
    app[e.item].isLoaded = true;
  });
  // module handler : create a new module
  app.module.create = function (name, obj) {
    obj.isModule = true;
    obj.isLoaded = false;
    app[name] = obj;
    app.module.items.push(name);
  };

  return app;

})(window, window.App);