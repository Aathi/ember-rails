App.LeadsNewController = Ember.Controller.extend({
  actions: {
    createLead: function() {
      var fields, lead;
      fields = this.get('fields');
      if (App.Lead.valid(fields)) {
        lead = this.store.createRecord('lead', fields);
        return lead.save().then((function(_this) {
          return function() {
            return _this.transitionToRoute('lead', lead);
          };
        })(this));
      } else {
        return this.set('showError', true);
      }
    }
  }
});
