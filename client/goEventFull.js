var React = require('react');

var GoEventFull = React.createClass({
  render: function() {
    return (
      
        
        <div>
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
          <a href="#">Join</a>
          
        </div>
      </div>
   
      )
    }
});

module.exports = GoEventFull;