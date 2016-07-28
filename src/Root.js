var React=require('react');
var ReactRouter= require('react-router');
var Router=ReactRouter.Router;
var Route = ReactRouter.Route;
var HomePage=require('./components/HomePage');
var IndexRoute=ReactRouter.IndexRoute;
var Login=require('./Login');
var App=require('./App');


var Root=React.createClass({
  render:function()
  {
    var history=this.props.history;
    return(
      <Router history={history}>
          <Route path="/" component={Login} />
          <Route path="home"  component={HomePage} />

      </Router>
    )
  }
})
module.exports=Root;
