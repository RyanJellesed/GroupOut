var ProfileEventBox = require('./profileEventBox');
var React = require('react');
var ReactDOM = require('react-dom');




var ProfileApp = React.createClass({
	getInitialState: function() {
		return {
			user: {},
			events: []
		}
	},
	loadEventsFromServer: function(){
        var self=this;
        $.ajax ({
            url: this.props.urlb,
            method: 'GET'
        }).done(function(d){
            self.setState({
                events: d
            })
        })
    },
	loadUserFromServer: function() {
		var self = this;
		$.ajax({
			url: this.props.urla,
			method: "GET"
		}).done(function(d) {
			self.setState({
				user: d
			})
		})
	},
	componentDidMount: function() {
		this.loadUserFromServer();
		this.loadEventsFromServer();
	},
    render: function() {
        if(this.state.user.facebook) {
        	var pic = this.state.user.facebook.picture;
        	var name = this.state.user.facebook.name;
        } else {
        	var pic = "";
        	var name = "";
        };

        return (
	        	<div className="container">
		    		<div className="container">
		    			<p>user logged in as:</p>

			            <div className="chip">
			              <img src={pic} />
			              {name}
			            </div>
		    		</div>
		    		<div className="container">
		    			<ProfileEventBox loadEvents={ this.loadEventsFromServer } user={this.state.user} events={this.state.events} />
		    		</div>
            	</div>
            )
    }

});

ReactDOM.render(<ProfileApp urla="/api/user/getUser" urlb="/api/event" />,
  document.getElementById('profile-app-all'));