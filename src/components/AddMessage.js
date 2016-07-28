var React = require('react');
var AddMessageStore=require('../stores/AddMessageStore');
var AddMessage=React.createClass({

  Save:function()
  {
    AddMessageStore.insertMessage(this.refs.message.value);
  },
  render:function()
  {
    return(
      <div
        aria-hidden="true"
        aria-labelledby="myModalLabel"
        role="dialog"
        id="modal-container-920079"
        className="modal fade">

        <div className="modal-dialog">

          <div className="modal-content">

            <div className="modal-header">

              <button
                aria-hidden="true"
                data-dismiss="modal"
                className="close"
                type="button">
                ×
              </button>

              <h4 id="myModalLabel" className="modal-title">
                Add New Message
              </h4>

            </div>

            <div className="modal-body">

              <textarea
                placeholder="Enter Message"
                id="message"
                ref="message"
                className="form-control"
                type="text"
                rows={10}
                defaultValue={"                    "} />

            </div>

            <div className="modal-footer">

              <button
                data-dismiss="modal"
                className="btn btn-default"
                type="button">
                Close
              </button>

              <button
                className="btn btn-primary"
                data-dismiss="modal"
                type="button"
                onClick={this.Save}>
                Save changes
              </button>

            </div>

          </div>

        </div>

      </div>
    )
  }
});
module.exports=AddMessage;
