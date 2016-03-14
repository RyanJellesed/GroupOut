var GoCard = React.createClass({
  render: function() {
    return (
      <div className="col s12 l4">
        <div className="card hoverable">
          
          <div className="card-image">
            <img src={this.props.img} />
            <span className="card-title">{this.props.title}</span>
          </div>
          
            <div className="card-content valign">
              <div>
                <div className="valign-wrapper" >
                <ul className="valign-wrapper">
                  <li>
                    <img className="icon-ours" src={this.props.categoryIcon} />
                  </li>
                  <li>
                    {this.props.familyFriendly ?  <img className="icon-ours" src="./icons/family-friendly.svg" /> : null } 
                  </li>
                  <li>
                    {this.props.petFriendly ?  <img className="icon-ours" src="./icons/pet-friendly.svg" /> : <img className="icon-ours" src="./icons/pet-friendlyNO.svg" /> }
                  </li>
                  <li>
                    <i className="material-icons left-align">{this.props.level}</i>
                  </li>
                </ul>
              </div>
            </div>
          
            <p>"Local running group that meets every Thursday for a great fun run and social drink after."</p>
          
            <h6>cretated by:</h6>
            
            <div className="chip">
              <img src={this.props.creatorImg} />
              {this.props.creatorName}
            </div>
        
        </div>
        <div className="card-action">
          <a href="#">Signup</a>
          <a href="#">View Group Out</a>
        </div>
      </div>
    </div>
      )
    }
});



