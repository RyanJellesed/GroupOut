var React = require('react');

var GoCard = React.createClass({
  getInitialState: function() {
    return {
      user: {},
    }
  },
  loadUserFromServer: function() {
    var self = this;
    $.ajax({
      url: "/api/user/getUser",
      method: "GET"
    }).done(function(d) {
      self.setState({
        user: d
      })
    })
  },
  componentDidMount: function() {
    this.loadUserFromServer();
  },
  joinEvent: function(event_id, joiners, user){
    var self = this;
    if(joiners.includes(user._id)) {
      alert('you\'ve already joined');
    } else {
       $.ajax({
        url: "/api/event/" + event_id + "/join",
        method: "PUT",
        dataType: "JSON"
      }).done(function(d){
        self.props.loadEvents();
        console.log(d);
      })
    }
  },
  render: function() {
    var u = this.state.user ? this.state.user : null;
    return (
      <div className="col s12 l4">
        <div className="card hoverable">
          
          <div className="card-image">
            <img src={this.props.img} />
            <span className="card-title">{this.props.title} </span>
              
         
          </div>
          
            <div className="card-content valign">
              

            <div className="row">
              <div className="col s7 valign-wrapper">
                  <img className="icon-ours-level" src={this.props.categoryIcon} />
                  <img className="icon-ours-level left" src={this.props.levelIcon} />
              </div>
              <div className="right">
                        
                        {this.props.familyFriendly ?  <img className="icon-ours" src="./icons/family-friendly.svg" /> : null }
                        {this.props.petFriendly ?  <img className="icon-ours" src="./icons/pet-friendly.svg" /> : <img className="icon-ours" src="./icons/pet-friendlyNO.svg" /> }
              </div>
            </div>  
            <p>{this.props.description}</p>
            <div className="divider"></div>
            <h6>created by:</h6>
            
            <div className="chip">
              <img src={this.props.creatorImg} />
              {this.props.creatorName}
            </div>

            <div className="chip">
              {this.props.joiners.length} people have joined this event
            </div>
        
        </div>
        <div className="card-action">
          <button onClick={this.joinEvent.bind(this, this.props.id, this.props.joiners, u)}>Join</button>
          <a href={"/goeventview?q=" + this.props.id}>View GO!</a>
        </div>
      </div>
    </div>
      )
    }
});

module.exports = GoCard;


