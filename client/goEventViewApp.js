var React = require('react');
var ReactDOM = require('react-dom');
var GoEventViewBox = require('./goEventViewBox');

var GoEventViewApp = React.createClass({
  
    getInitialState: function(){
        return {
            event: null,
            
        }
        
    },
    
    loadEventFromServer: function(){
        var self=this;
        var eventID = window.location.href.split('=').pop()
        $.ajax ({
            url: '/api/event/' + eventID,
            method: 'GET'
        }).done(function(d){
            self.setState({
                event: d
            })
        })
    },
    componentDidMount: function(){
        this.loadEventFromServer()
    },
    render: function() {
        if (this.state.event) {
    		   var joinersMap = this.state.event.joiners
                .map(function(aJoiner) {
                    return aJoiner._id
                })
               return (
                      <div>
                        <GoEventViewBox joiners={joinersMap} event={this.state.event} loadEvent={this.loadEventFromServer} />
                      </div>

      					)
    		} else {
    			return null;
    		}
 
   	 }
});

ReactDOM.render(<GoEventViewApp />,
  document.getElementById('goeventview-app'));