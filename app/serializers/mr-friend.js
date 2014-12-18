import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTSerializer.extend({
  normalize: function(type, hash, property) {
    hash.id = hash._id;
    delete hash._id;
    return this._super(type, hash, property);
  },
  keyForAttribute: function(attr) {
    return Ember.String.underscore(attr);
  },
  extractSingle: function(store, type, payload) {
    // console.log('extractSingle is called');
    // console.log(payload);
    console.log(type);
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


//ref: https://github.com/samharnack/ember-model-parse-adapter
