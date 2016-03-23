var React = require('react');

var CommentForm = React.createClass({
    getInitialState: function() {
      return {
        commentBody : "",
         
      }
    },
    handleCommentFormChange: function(event) {
      this.setState({commentBody: event.target.value});
    },
    handleSubmit: function(e) {
      e.preventDefault();
      var commentBody = this.state.commentBody;
      var event = this.props.event._id;
      var date = new Date();
      this.props.commentSubmit({
        event: event,
        date: date,
        commentBody: commentBody,
        }); 
    },
    render: function() {
        return (
            <div>  
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="input-field col s12">
                      <input onChange ={this.handleCommentFormChange} value={this.state.commentBody} placeholder="comment" type="text" />
                  </div>
                </div> 
                <div className="row">
                  <div className="col s12 container">
                  <button type="submit" className="waves-effect waves-light btn-large"> <i className="material-icons right">send </i>comment</button>
                  </div>
                </div> 
              </form>
            </div>
        )
    }
});

module.exports = CommentForm;