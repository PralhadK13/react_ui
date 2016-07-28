var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var LoginApi=require('../api/loginapi');

var _userName,_userid;
// to read the username from cookie
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
var LoginStore = assign({}, EventEmitter.prototype, {
  //check user is valid or not
   isValid:function(username,password)
   {
    var userName=LoginApi.isAuthenticate(username,password);
    console.log(userName);
    _userid=userName.userid;
    return LoginStore.setuserNameinCookie(userName.username);

   },
   //set the user name in cookie
   setuserNameinCookie:function(username)
   {
     if(username != "")
     {
       document.cookie ='username='+username;
       _userName=username;

       return true;
     }
     else {
       document.cookie ='username=';
       _userName='';
       return false;
     }
   },
   getCookie:function(name)
   {
     return readCookie(name);
   },
   //once user logout delete the cookie will called
   deleteCookie:function(name)
   {
     document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
   },
   getUserName:function()
   {
     return _userName;
   },
   getUserId:function()
   {
     return _userid;
   },
   registerUser:function(data)
   {
     try {
       _userid=LoginApi.registerUserCall(data);
       this.setuserNameinCookie(data.email);
       _userName=data.email;

       return true;
     } catch (ex) {
       alert(ex);
       return false;
     }
   }
});
module.exports=LoginStore;
