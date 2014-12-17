import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  // host: 'http://app.konacloud.io',
  namespace: 'api/daniel/embercli101',
  buildURL: function(type, id, record) {
    var ret = "";
    if (id){
      ret = this._super(type, null , record);
      ret = ret + '?id=' + id;
    }else{
      ret = this._super(type, id, record);
    }
    return ret;
  }
});
