App.LeadEditRoute = Ember.Route.extend({
  activate: function() {
    return this.controllerFor('lead').set('isEditing', true);
  },
  deactivate: function() {
    return this.controllerFor('lead').set('isEditing', false);
  }
});
