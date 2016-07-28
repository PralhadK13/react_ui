var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var addMessageApi=require('../api/addMessageApi');
var LoginStore=require('./LoginStore');


var _getMessageList=[];
var AddMessageStore = assign({}, EventEmitter.prototype, {

  // emit changes to notify view
  emitChange: function() {
    this.emit('change');
  },
  //handler for emit change
  addChangeListener: function(callback) {
    this.on('change', callback);
  },
  //handler for emit change
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  },
  //to insert the Message
  insertMessage:function(message)
  {
    var data={
      'message':message,
      'userid':LoginStore.getUserId()
    };
    if(addMessageApi.insertMessage(data) != '')
    {
      AddMessageStore.getMessageList();
    }
  },
  // To get the all messagelist
  getMessageList:function()
  {
    addMessageApi.getMessages(function(data){
      _getMessageList=data;
      AddMessageStore.emitChange();
    });
  },
  //local store 
  getMessages:function()
  {
    return _getMessageList;
  }

});
module.exports=AddMessageStore;
