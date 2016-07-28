var config=require('../../Config');
var addMessageApi={

  insertMessage:function(data)
  {
    return 'added';
      /*$.ajax({
              url: config.url+'/InsertMessage',
              type: "POST",
              contentType: false,
              processData: false,
              data: data,
              success: function(data) {
                  if(StatusCode!=200)
                  {
                    alert(data.message);
                    return '';
                  }
                  else
                  {
                    return {'userid':data.userid};
                  }
              }.bind(this),
              error: function(exception) {
                 alert(exception);
              }.bind(this)
          });*/
  },

  getMessages:function(callback)
  {

    callback([{message:'this is test message',title:'title'},{message:'this is test message',title:'title'}]);
    /*$.ajax({
            url: config.url+'/getMessages',
            type: "POST",
            contentType: false,
            processData: false,
            data: data,
            success: function(data) {
                if(StatusCode!=200)
                {
                  alert(data.message);

                }

                callback(data)
            }.bind(this),
            error: function(exception) {
               alert(exception);
            }.bind(this)
        });*/
  }


};
module.exports=addMessageApi;
