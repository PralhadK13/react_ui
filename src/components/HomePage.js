var React = require('react');
var Router=require('react-router');
var LoginStore=require('../stores/LoginStore');
var AddMessageStore=require('../stores/AddMessageStore');

var AddMessage=require('./AddMessage');
var Link=Router.Link;
var History = require('react-router').History;


function setStateData()
{
  return {
    messageList:JSON.parse(JSON.stringify(AddMessageStore.getMessages()))
  };
}
var HomePage=React.createClass({
  mixins: [ History ],
  getInitialState: function() {
    return setStateData();
  },
  componentDidMount:function()
  {
    var isValid=LoginStore.getCookie('username');
    if(isValid == '' || isValid===null)
    {
      this.history.pushState(null, "/");
    }
    AddMessageStore.addChangeListener(this.onChange)
    AddMessageStore.getMessageList();

  },
  componentWillUnmount: function() {
    AddMessageStore.removeChangeListener(this.onChange);
  },
  onChange:function()
  {
    this.setState(setStateData());
  },
  SignOut:function()
  {
    LoginStore.deleteCookie('username');
    this.history.pushState(null, "/");
  },
  render:function()
  {
    var userName=LoginStore.getUserName();
    var messageList=this.state.messageList;
    console.log(this.state.messageList);
    return(
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              Welcome {userName},
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-8">
                  <h4>
                    Recent message
                  </h4>
                </div>
                <div className="col-md-4">
                  <a
                    data-toggle="modal"
                    className="btn"
                    role="button"
                    href="#modal-container-920079"
                    id="modal-920079">
                    <span className="label label-success">
                      Add New Message+
                    </span>
                  </a>
                </div>
              </div>
              {
                Object.keys(messageList).map(function(mesg){
                  console.log();
                  var msg=JSON.parse(JSON.stringify(messageList[mesg]));

                  return(
                    <blockquote>
                      <p>
                        {msg.message}
                      </p>
                      <small>
                        {msg.title}
                      </small>
                    </blockquote>
                  )
                })
              }
              <ul className="pagination">
                <li>
                  <a href="#">Prev</a>
                </li>
                <li>
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">5</a>
                </li>
                <li>
                  <a href="#">Next</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <button
                className="btn btn-primary"
                onClick={this.SignOut}>
                Logout
              </button>
            </div>
          </div>
        </div>
        <AddMessage />
      </div>
    );
  }
});
module.exports=HomePage;
