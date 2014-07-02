App.LeadEditController = Ember.ObjectController.extend({
  actions: {
    cancel: function() {
      this.get('model').rollback();
      return this.transitionToRoute('lead');
    },

    saveChanges: function() {
      return this.get('model').save().then((function(_this) {
        return function() {
          return _this.transitionToRoute('lead');
        };
      })(this));
    }
  }
});


