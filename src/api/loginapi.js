var config=require('../../Config');
var LoginApi={
  //Checked the passed credential is correct or not and if correct then return a username
  isAuthenticate:function(username,password)
  {
      console.log(username);
      //console.log(login.username);
      /*var ds={
         'username':username,
         'password':password
      };*/
      return {'userid':1,'username':username};
    /*  $.ajax({
                url: config.url+'/AutheticateUser',
                type: "POST",
                contentType: false,
                processData: false,
                data: ds,
                success: function(data) {
                    if(StatusCode!=200)
                    {
                      alert(data.message);
                      return '';
                    }
                    else
                    {
                      return {'userid':data.userid,'username':username};
                    }
                }.bind(this),
                error: function(exception) {
                   alert(exception);
                }.bind(this)
            });*/
  },
  registerUserCall:function(data)
  {
    console.log(data);
      /*$.ajax({
                url: config.url+'/InsertUser',
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
  }
};
module.exports=LoginApi;
