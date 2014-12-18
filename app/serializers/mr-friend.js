import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTSerializer.extend({
  normalizeHash: {
    kona: function(hash) {
    },
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
    // console.log('extractSingle is called');
    // console.log(payload);
    payload = { mrFriend: payload.data };
    return this._super(store, type, payload);
  },
  extractArray: function(store, type, payload) {
    payload = { mrFriends: payload.data };
    return this._super(store, type, payload);
  },
  serializeIntoHash: function(hash, type, record, options) {
    //ref: http://stackoverflow.com/questions/19571025/solved-delete-json-root-element-for-post-put-operations-in-ember-data
    Ember.merge(hash, this.serialize(record, options));
  }
});
