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
                    <i className="material-icons left-align">directions_bike</i>
                  </li>
                  <li>
                    <i className="material-icons left-align">child_friendly</i>
                  </li>
                  <li>
                    <i className="material-icons left-align">adb</i>
                  </li>
                  <li>
                    <i className="material-icons left-align">filter_3</i>
                  </li>
                </ul>
              </div>
            </div>
          
            <p>"Local running group that meets every Thursday for a great fun run and social drink after."</p>
          
            <h6>cretated by:</h6>
            
            <div className="chip">
              <img src="images/yuna.jpg" alt="Contact Person" />
              Jane Doe
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



