var React = require('react');

var GoCard = React.createClass({
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
    console.log(u);
    if(this.state.user.facebook.name !== 'anon') {
      return <button className="waves-effect waves-light btn blue-grey" onClick={this.joinEvent.bind(this, this.props.id, this.props.joiners, u)}>Join</button>
    } else {
      return <a className="waves-effect waves-light btn blue-grey" href="/auth/facebook">login to join</a>
    }
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
                  <img className="icon-ours-category" src={this.props.categoryIcon} />
                  <img className="icon-ours-level left" src={this.props.levelIcon} />
              </div>
              <div className="right">
                        
                        {this.props.familyFriendly ?  <img className="icon-ours" src="./icons/family-friendly.svg" /> : null }
                        {this.props.petFriendly ?  <img className="icon-ours" src="./icons/pet-friendly.svg" /> : <img className="icon-ours" src="./icons/pet-friendlyNO.svg" /> }
              </div>
            </div>

            <div className="overflowcard">{this.props.description}</div>
            <div className="divider"></div>
            <h6>created by:</h6>
            
            <div className="chip">
              <img src={this.props.creatorImg} />
              {this.props.creatorName}
            </div>

            <div className="chip">
              {this.props.joiners.length} peeps GOing
            </div>
        
        </div>
        <div className="card-action">
          <div className="row button-row"> 
            <div className="col s6 valign-wrapper"> 
              {this.shouldShowJoin()}
            </div>
            <div className="right">
              <a className="waves-effect waves-light btn blue-grey" href={"/goeventview?q=" + this.props.id}>View GO!</a>
            </div>
          </div>
        </div>
      </div>
    </div>
      )
    }
});

module.exports = GoCard;


