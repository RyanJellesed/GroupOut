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
        	petFriendly    : false,
        	familyFriendly : false,
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
    handlePetFriendlyChange: function(e) {
    	this.setState({time: e.target.value});
    },
    handleFamilyFriendlyChange: function(e) {
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
        var petFriendly = this.state.petFriendly;
        var familyFriendly = this.state.familyFriendly;
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
    		category       : {},
        	level          : {},
        	title          : "",
        	description    : "", 
        	location       : "",
        	date           : "",
        	time           : "",
        	petFriendly    : false,
        	familyFriendly : false,
    	});
    },
	render: function() {
	    return (
			<div className="container">
			    <div className="row">
			   	  <form className="col s12">
			      	<div className="row">
			        		<div className="input-field col s12">
			         		 <input placeholder="Killer Outing" id="title" type="text" className="validate" />
			          		 <label>Name your GO!</label>
			        		</div>
			      	</div> 
			      	<div>
				      	<DropDowns categories={this.props.categories} levels={this.props.levels} />
				    </div>

			     	<div className="row">
				       <div className="input-field col s6">
				          		<select className="icons">
				          		<option value = "" disabled selected> What kind of GO!</option>
				          		<option value = "" data-icons="./icons/mountain-biking.svg">Mountain Biking</option>
				          		<option value = "" data-icons="./icons/running.svg"> Running</option>
				          		</select>
				          		<label>Pick your category</label>	
				        </div>
				        <div className="input-field col s6">
				          		<select className="icons">
				          		<option value = "" disabled selected> How hard is your GO</option>
				          		<option value = "" data-icons="img/dog.jpg" className="circle">Easy</option>
				          		<option value = "" data-icons="./img/dog.jpg" className="circle"> Medium</option>
				          		<option value = "" data-icons="../img/dog.jpg" className="circle"> Hard</option>
				          		</select>
				          		<label>Pick the difficulty</label>
				        </div>
			 
				 	</div>

				 	<div className="row">
			        	<div className="input-field col s12">
			          		<input placeholder="Location" id="location" type="text" className="validate" />
			          		<label>Wheres your GO!</label>
			        	</div>
			      	</div>  

					<div className="container" id="map"></div>

			      	<div className="row">
				     	<div className="input-field col s12">
				          <input placeholder="Description" id="description" type="text" className="validate" />
				          <label for="title">Describe your GO</label>
				        </div>
			      	</div>  

			      	<div className="row">
				        <div className="input-field col s6">
							 <input id="date" type="date" className="datepicker" />
				        </div>
				        <div className="input-field col s6">
				          <input placeholder="Time" id="time" type="text" />
				          <label for="title">Time of your GO</label>
				        </div>
			      	</div> 

			      	<div className="row">
				        <div className="input-field col s6">
				          	
				          		 <input type = "checkbox" id="family-friendly" />
				          		 <label for = "Family Friendly">Is your Go Family Friendly?</label>
				          	
				        </div>
				        <div className="input-field col s6">
				          	
				          		<input type = "checkbox" id="family-friendly" />
				          		<label for = "Pet Friendly">Is your Go Pet Friendly?</label>
				          	
				        </div>
				 	</div> 	 		
				 	<div className="row">
					 	<div className="container">
					 		<a className="waves-effect waves-light btn-large"> <i className="material-icons right">send </i>SAVE GO </a>
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
                <FormBox categories={this.state.categories} levels={this.state.levels} />
            </div>
            )
    }

});

ReactDOM.render(<FormApp />, document.getElementById('formbox'));
