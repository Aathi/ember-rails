App.Router.reopen({
  rootURL: '/',
  location: 'auto'
});

App.Router.map(function() {
  return this.resource('leads', {
    path: '/'
  }, function() {
    this.route('new');
    
    return this.resource('lead', {
      path: 'leads/:id'
    }, function() {
      return this.route('edit');
    });
  });
});
