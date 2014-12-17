import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeHash: {
    mrFriends: function(hash) {
      hash.id = hash._id;
      delete hash._id;
      return hash;
    },
    mrFriend: function(hash) {
      hash.id = hash._id;
      delete hash._id;
      return hash;
    }
  },
  keyForAttribute: function(attr) {
    return Ember.String.underscore(attr);
  },
  extractSingle: function(store, type, payload) {
    payload = { mrFriend: payload.data };
    return this._super(store, type, payload);
  },
  extractArray: function(store, type, payload) {
    payload = { mrFriends: payload.data };
    return this._super(store, type, payload);
  }
});
