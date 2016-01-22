import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return { username: '', password: ''}
  },
  actions: {
    instagramLogin: function(provider) {
      var controller = this.controller;
      this.get('session').authenticate('authenticator:torii', 'instagram-connect').then(null, function(error) {
        controller.set('errorMessage', error);
      });
    },
  }
});
