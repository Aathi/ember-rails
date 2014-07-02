App.LeadsNewRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('fields', {});
    return controller.set('showError', false);
  }
});
