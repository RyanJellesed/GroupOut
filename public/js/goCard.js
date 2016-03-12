var GoCard = React.createClass({
  propTypes: {
        url: React.PropTypes.string.isRequired
    },
    getInitialState: function(){
        return {
            events: [],
            
        }
    },
    
    loadEventsFromServer: function(){
        var self=this;
        $.ajax ({
            url: this.props.url,
            method: 'GET'
        }).done(function(d){
            self.setState({
                events: d
            })
        })
    },
    componentDidMount: function(){
        this.loadEventsFromServer()
    },
  render: function() {
    return (
      <div className="col s12 l4">
        <div className="card hoverable">
          <div className="card-image">
              <img src="../img/running.jpg"/>
                <span className="card-title">{this.props.events.title}</span>
          </div>
        </div>
      </div>
      )
    }
});


React.render(<GoCard url="/api/event/" />,
  document.getElementById('goCard-app'));


