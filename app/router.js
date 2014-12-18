import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('mrFriends', function() {
    this.route('new');
    this.route('show', { path: ':mrFriend_id' });
    this.route('edit', { path: ':mrFriend_id/edit' });
  });
  this.route('aplication');
});

export default Router;
