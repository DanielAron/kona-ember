import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  extractArray: function(store, type, payload) {
    console.log(payload);
    var mrFriends = payload.data;

    mrFriends.forEach(function(mrFriend) {
      mrFriend.id = mrFriend._id;
      delete mrFriend._id;

      mrFriend.lastName = mrFriend.last_name;
      mrFriend.firstName = mrFriend.first_name;
      mrFriend.totalArticles = mrFriend.total_articles;

      delete mrFriend.last_name;
      delete mrFriend.first_name;
      delete mrFriend.total_articles;

    });

    payload = { mrFriends: mrFriends };

    console.log(payload);

    return this._super(store, type, payload);

  }
});
