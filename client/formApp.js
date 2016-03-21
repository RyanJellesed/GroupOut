var React = require('react');
var ReactDOM = require('react-dom');
var injectTapEventPlugin = require("react-tap-event-plugin");
var DropDowns = require('./drpdowns');

injectTapEventPlugin();

var FormBox = React.createClass({
	getInitialState: function() {
    	return {
    		categories     : [],
        	levels         : [],
        	title          : "",
        	description    : "", 
        	location       : "",
        	date           : "",
        	time           : "",

    	}
    },
    handleCategoryChange: function(e) {
    	this.setState({categories: e.target.value});
    },
    handleLevelChange: function(e) {
    	this.setState({levels: e.target.value});
    },
    handleTitleChange: function(e) {
    	this.setState({title: e.target.value});
    },
    handleDescriptionChange: function(e) {
    	this.setState({description: e.target.value});
    },
    handleLocationChange: function(e) {
    	this.setState({location: e.target.value});
    },
    handleDateChange: function(e) {
    	this.setState({date: e.target.value});
    },
    handleTimeChange: function(e) {
    	this.setState({time: e.target.value});
    },

 
    handleSubmit: function(e) {
    	e.preventDefault();
    	var category = this.state.category;
        var level = this.state.level;
        var title = this.state.title.trim();
        var description = this.state.description.trim();
        var location = this.state.location.trim();
        var date = this.state.date.trim();
        var time = this.state.time.trim();
        var petFriendly = $("#pet-friendly").is(":checked");
        var familyFriendly = $("#family-friendly").is(":checked");
        console.log("Trying to Submit");
    	this.props.eventSubmit({
    		category       : category,
        	level          : level,
        	title          : title,
        	description    : description, 
        	location       : location,
        	date           : date,
        	time           : time,
        	petFriendly    : petFriendly,
        	familyFriendly : familyFriendly,
        })
        this.setState({
    		
        	title          : "",
        	description    : "", 
        	location       : "",
        	date           : "",
        	time           : "",

    	});
    },
	render: function() {
	    return (

			<div className="container">
					<div className="col s12">
						<h4>CREATE YOUR GROUP OUT </h4>	
					</div>
					<div className="divider"></div>

			    <div className="row">
			   	  <form onSubmit={this.handleSubmit} className="col s12">
			   	  <div className="row"></div>
			      	<div className="row">
			        		<div className="input-field col s12">
			         		 <input onChange={this.handleTitleChange} value={this.state.title}  placeholder="Killer Outing" id="title" type="text" className="validate" />
			          		 <label>Name your GO!</label>
			        		</div>
			      	</div> 
			      	

				    <DropDowns categories={this.props.categories} levels={this.props.levels} />
				    

				 	<div className="row">
			        	<div className="input-field col s12">
			          		<input onChange={this.handleLocationChange} value={this.state.location} placeholder="Location" id="location" type="text" className="validate" />
			          		<label>Wheres your GO!</label>
			        	</div>
			      	</div>  

					<div className="container" id="map"></div>

			      	<div className="row">
				     	<div className="input-field col s12">
				          <input onChange ={this.handleDescriptionChange} value={this.state.description} placeholder="Description" id="description" type="text" className="validate" />
				          <label for="title">Describe your GO</label>
				        </div>
			      	</div>  

			      	<div className="row">
				        <div className="input-field col s6">
							 <input onChange={this.handleDateChange} value={this.state.date} id="date" type="date" className="datepicker" />
				        </div>
				        <div className="input-field col s6">
				          <input onChange={this.handleTimeChange} value={this.state.time} placeholder="Time" id="time" type="text" />
				          <label>Time of your GO</label>
				        </div>
			      	</div> 

			      	<div className="row">
				        <div className="input-field col s6">
				          	
				          		 <input type="checkbox" id="pet-friendly" />
				          		 <label htmlFor="pet-friendly"> Is your Go Pet Friendly?</label>
				          	
				        </div>
				        <div className="input-field col s6">
				          	
				          		<input type ="checkbox" id="family-friendly" />
				          		<label htmlFor="family-friendly"> Is your Go Family Friendly?</label>
				          	
				        </div>
				        <div className="row"></div>
				        <div className="divider"></div>
				 	</div> 	 		
				 	<div className="row">
					 	<div className="col s12 container">
					 		<button type="submit" className="waves-effect waves-light btn-large"> <i className="material-icons right">send </i>SAVE GO </button>
					 		
					 	</div>
					</div> 
				</form>
				 		
			   </div>
			</div> 
	        )
	    }

});

var FormApp = React.createClass({

	getInitialState: function () {
        return {
            categories: [],
            levels: [],
        }
    },
	loadLevelsFromServer: function() {
		var self = this;
		console.log('trying to load levels from server');
		$.ajax({
			url: '/api/levels',
			method: 'GET'
		}).done(function(levels) {
			console.log(levels);
			self.setState({levels : levels})
		})
	},
	loadCategoriesFromServer: function() {
		var self = this;
		console.log('trying to load categories from server');
		$.ajax({
			url: '/api/categories',
			method: 'GET'
		}).done(function(categories) {
			console.log(categories);
			self.setState({categories : categories})
		})
	},
    eventSubmit: function(event){
         var self = this;
         $.ajax({
            url: '/api/event',
            method: 'POST',
            data: event,
        }).done(function() {
        	document.location = "/profile"
            console.log('posted event to server')
        }).fail(function(err){
        	console.log(err);
        	alert('no go bro!')
        })
    },
    componentDidMount: function() {
        console.log('componentDidMount fired');
        this.loadLevelsFromServer();
        this.loadCategoriesFromServer();
    },
    render: function() {
        console.log('trying to render');
        return (
            <div>
                <FormBox eventSubmit={this.eventSubmit} categories={this.state.categories} levels={this.state.levels}  />
            </div>
            )
    }

});

ReactDOM.render(<FormApp />, document.getElementById('formbox'));
