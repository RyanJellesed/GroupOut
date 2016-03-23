var React = require('react');
var GoEventViewComments = require('./goEventViewComments');
var CommentForm = require('./commentForm');

var GoEventViewBox = React.createClass({
  commentOnEvent: function(event_id){
    var data = {one: "thing"};
    console.log("ajax initiated");
    $.ajax({
      url: "/api/event/" + event_id + "/comment",
      method: "POST",
      data: data,
      dataType: "JSON"
    }).done(function(d){
      console.log(d);
    })
  },
  commentSubmit: function(comment){
         var self = this;
         $.ajax({
            url: "/api/event/" + comment.event + "/comment",
            method: 'POST',
            data: comment,
        }).done(function() {
          
        }).fail(function(err){
          console.log(err);
          alert('no go bro!')
        })
    },
  render: function() {
    console.log(this.props.event); 
    return (
    <container>
      <div className="col s12">
        <div className="card hoverable">
          <div className="card-image">
            <img src={this.props.event.category.img} />
            <span className="card-title">{this.props.event.title} </span>
              
         
          </div>
          
            <div className="card-content valign">
              

            <div className="row">
              <div className="col s7 valign-wrapper">
                  <img className="icon-ours-level" src={this.props.event.category.icon} />
                  <img className="icon-ours-level left" src={this.props.event.level.icon} />
              </div>
              <div className="right">
                        
                        {this.props.event.familyFriendly ?  <img className="icon-ours" src="./icons/family-friendly.svg" /> : null }
                        {this.props.event.petFriendly ?  <img className="icon-ours" src="./icons/pet-friendly.svg" /> : <img className="icon-ours" src="./icons/pet-friendlyNO.svg" /> }
              </div>
            </div>  
            <p>{this.props.event.description}</p>
            <div className="divider"></div>
            <h6>created by:</h6>
            
            <div className="chip">
              <img src={this.props.event.creator.facebook.picture} />
              {this.props.event.creator.facebook.name}
            </div>

            <div className="chip">
              {this.props.event.joiners.length} people have joined this event
            </div>
            <div>
              <h6>COMMENTS</h6>
            <GoEventViewComments comments={this.props.event.comments} />
            <CommentForm commentSubmit={this.commentSubmit} event={this.props.event} />
            </div>
        </div>
        <div className="card-action">
          <a href="#">Join</a>  
        </div>

        

      </div>
    </div>
  </container>
   
          )
	}
});

module.exports = GoEventViewBox;
