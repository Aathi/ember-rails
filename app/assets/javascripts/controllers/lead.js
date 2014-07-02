App.LeadController = Ember.ObjectController.extend({
 
  isEditing: false,

  showUnsavedMessage: (function() {
    return this.get('isDirty') && !this.get('isSaving');
  }).property('isDirty', 'isSaving'),
  
  actions: {

    saveChanges: function() {
      return this.get('model').save();
    },
    
    delete: function() {
      return this.get('model').destroyRecord().then((function(_this) {
        return function() {
          return _this.transitionToRoute('leads');
        };
      })(this));
    }
  }
});



