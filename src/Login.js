var React = require('react');
var ReactDom=require('react-dom');
var History = require('react-router').History;
var LoginStore=require('./stores/LoginStore');



var Login=React.createClass({
  mixins: [ History ],  //to maintain the History of Route and push the new route
  Login:function(event)
  {

    if(this.refs.username.value !== "" && this.refs.password.value !== "")
    {
      if(LoginStore.isValid(this.refs.username.value,this.refs.password.value))
      {
        this.history.pushState(null, "/home"); //push the route to of home page
      }
      else {
        swal("error","Please enter the correct username and password","error");
      }
    }
    else {
      swal("error","Please enter the required details","error");
    }
  },
  Register:function(event)
  {
    if(this.refs.rname.value !== '' && this.refs.remail.value !== '' && this.refs.rpassword !== '')
    {
      var data={
        'name':this.refs.rname.value,
        'email':this.refs.remail.value,
        'password':this.refs.rpassword.value,
        'phone':this.refs.rphone.value
      }

      if(LoginStore.registerUser(data))
      {
        this.history.pushState(null, "/home");
      }
    }
    else {
      swal("error","Please enter the required details","error");
    }
  },
  componentDidMount:function()
  {

    this.refs.username.focus();
  },
  //to handle enter key after tab
  _handleKeyPress: function(e) {
    if (e.key === 'Enter') {
      this.Login(e);
    }
  },
  render:function()
  {
    return(
      <div className="container-fluid">

        <div className="row">

          <div className="col-md-4">


            <h4>Login</h4>

            <div className="form-group">

              <label htmlFor="exampleInputEmail1">
                Email address
              </label>

              <input
                type="email"
                id="exampleInputEmail1"
                className="form-control"
                ref="username" />

            </div>

            <div className="form-group">

              <label htmlFor="exampleInputPassword1">
                Password
              </label>

              <input
                type="password"
                id="exampleInputPassword1"
                className="form-control"
                ref="password"
                onKeyPress = {this._handleKeyPress} />

            </div>

            <button
              className="btn btn-success"
              onClick={this.Login}>
              Login
            </button>


          </div>

          <div className="col-md-2" />

          <div className="col-md-4">


            <h4>Register</h4>

            <div className="form-group">

              <label htmlFor="exampleInputEmail1">
                Name
              </label>

              <input
                type="text"
                id="exampleInputEmail1"
                className="form-control"
                ref="rname"/>

            </div>

            <div className="form-group">

              <label htmlFor="exampleInputEmail1">
                Email address
              </label>

              <input
                type="email"
                id="exampleInputEmail1"
                className="form-control"
                ref="remail" />

            </div>

            <div className="form-group">

              <label htmlFor="exampleInputEmail1">
                Phone
              </label>

              <input
                type="text"
                id="exampleInputEmail1"
                className="form-control"
                ref="rphone" />

            </div>

            <div className="form-group">

              <label htmlFor="exampleInputPassword1">
                Password
              </label>

              <input
                type="password"
                id="exampleInputPassword1"
                className="form-control"
                ref="rpassword"/>

            </div>


            <button
              className="btn btn-primary"
              onClick={this.Register}>
              Register
            </button>


          </div>

          <div className="col-md-2" />

        </div>

        <div className="row">

          <div className="col-md-12">

          </div>

        </div>

      </div>

    );
  }
});
module.exports=Login;
