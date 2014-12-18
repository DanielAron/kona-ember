import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    save: function() {
        var _this = this;
        this.get('model').save().then(function(mrFriend) {
          _this.transitionToRoute('mrFriends.show', mrFriend);
        });
    },
    cancel: function() {
      return true;
    }
  }
});
