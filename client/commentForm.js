var React = require('react');

var CommentForm = React.createClass({
    getInitialState: function() {
      return {
        commentBody : "",
         
      }
    },
    handleCommentFormChange: function(thing) {
      this.setState({commentBody: thing});
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
              <div className="row">
                <div className="input-field col s12">
                    <input onChange ={this.handleCommentFormChange} value={this.state.commentBody} placeholder="comment" id="comment" type="text" className="validate" />
                </div>
              </div> 
              <div className="row">
                <div className="col s12 container">
                <button type="submit" className="waves-effect waves-light btn-large"> <i className="material-icons right">send </i>comment</button>
              </div>
            </div> 
          </div>
        )
    }
});

module.exports = CommentForm;