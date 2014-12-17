import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  host: 'http://app.konacloud.io',
  namespace: 'api/daniel/embercli101',
  find: function(store, type, id) {
    var ret = this._super(store, type, id);
    return ret;
  },
  findAll: function(store, type, sinceToken) {
    console.log(type);
    console.log(sinceToken);
    var ret = this._super(store, type, sinceToken);
    console.log(ret);
    return ret;
  }
});
