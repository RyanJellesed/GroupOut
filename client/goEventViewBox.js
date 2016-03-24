var React = require('react');
var GoEventViewComments = require('./goEventViewComments');
var CommentForm = require('./commentForm');
var JoinersChips = require('./joinersChips');

var GoEventViewBox = React.createClass({
  commentSubmit: function(comment){
    var comment = comment;
         var self = this;
         $.ajax({
            url: "/api/event/" + comment.event + "/comment",
            method: 'POST',
            data: comment,
        }).done(function(data) {
          console.log(data);
          self.props.loadEventFromServer();
        }).fail(function(err){
          console.log(err);
          alert('no go bro! gotta login to comment')
        })
  },
  getInitialState: function() {
    return {
      user: {facebook: {name: 'anon'}},
    }
  },
  loadUserFromServer: function() {
    var self = this;
    $.ajax({
      url: "/api/user/getUser",
      method: "GET"
    }).done(function(d) {
      console.log(d)
      if(d.user === "no user"){
      self.setState({
        user: {facebook: {name: 'anon'}}
      })
      } else {
      self.setState({
        user: d
      })        
      }
    })
  },
  componentDidMount: function() {
    this.loadUserFromServer();
  },
  shouldShowJoin: function() {
    var u = this.state.user ? this.state.user : {facebook: {name: 'anon'}};
    if(this.state.user.facebook.name !== 'anon') {
      return <button className="waves-effect waves-light btn blue-grey" onClick={this.joinEvent.bind(this, this.props.event._id, this.props.joiners, u)}>Join</button>
    } else {
      return <a className="waves-effect waves-light btn blue-grey" href="/auth/facebook">login to join</a>
    }
  },
  joinEvent: function(event_id, joiners, user){
    var self = this;
    console.log(joiners, user, "join event trying to work");
    if(joiners.includes(user._id)) {
      alert('you\'ve already joined');
    } else {
       $.ajax({
        url: "/api/event/" + event_id + "/join",
        method: "PUT",
        dataType: "JSON"
      }).done(function(d){
        self.props.loadEvent();
        console.log(d);
      })
    }
  },
  render: function() {
    console.log(this.props.event); 
    return (
    <container>
      <div id="GoViewFullPage" className="col s12">
        <div className="card hoverable">
          <div className="card-image">
            <img src={this.props.event.category.img} />
            <span className="card-title">{this.props.event.title} </span>
              
         
          </div>
          
            <div className="card-content valign">
              

            <div className="row">
              <div className="col s7 valign-wrapper">
                  <img className="icon-ours-category" src={this.props.event.category.icon} />
                  <img className="icon-ours-level left" src={this.props.event.level.icon} />
              </div>
              <div className="right">
                        
                        {this.props.event.familyFriendly ?  <img className="icon-ours" src="./icons/family-friendly.svg" /> : null }
                        {this.props.event.petFriendly ?  <img className="icon-ours" src="./icons/pet-friendly.svg" /> : <img className="icon-ours" src="./icons/pet-friendlyNO.svg" /> }
              </div>
            </div> 
            <h6>DESCRIPTION</h6>
            <div className="divider"></div> 
            <p>{this.props.event.description}</p>
            <div className="divider"></div>
            <h6>created by:</h6>
            
            <div className="chip">
              <img src={this.props.event.creator.facebook.picture} />
              {this.props.event.creator.facebook.name}
            </div>
            <div className="divider"></div>
            <h6>Joined by:</h6>
            <JoinersChips joinerschips={this.props.event.joiners} />
            
            <div>
              <h6>COMMENTS</h6>
            <GoEventViewComments comments={this.props.event.comments} />
            <CommentForm commentSubmit={this.commentSubmit} event={this.props.event} />
            </div>
        </div>
        <div className="card-action">
          {this.shouldShowJoin()}  
        </div>

        

      </div>
    </div>
  </container>
   
          )
	}
});

module.exports = GoEventViewBox;
