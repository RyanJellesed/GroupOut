var React = require('react');
var GoEventViewBox = require('./goEventViewBox');

var GoEventViewApp = React.createClass({
  
    getInitialState: function(){
        return {
            event: {},
            
        }
        console.log(event)
    },
    
    loadEventFromServer: function(){
        var self=this;
        var eventID = window.location.href.split('/').pop()
        $.ajax ({
            url: '/api/event/' + eventID,
            method: 'GET'
        }).done(function(d){
            console.log(d);
            self.setState({
                events: d
            })
        })
    },
    componentDidMount: function(){
        console.log("componentDidMount fired");
        this.loadEventFromServer()
    },
    render: function() {
    return (
      <div>
        <GoEventViewBox events={this.state.events} />
      </div>

      )
    }
});

ReactDOM.render(<GoEventViewApp />,
  document.getElementById('goeventview-app'));