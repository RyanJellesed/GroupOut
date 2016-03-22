var React = require('react');

var GoEventViewBox = React.createClass({
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
