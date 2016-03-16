var React = require('react');
var ReactDOM = require('react-dom');

var FormBox = React.createClass({
    /*propTypes: 	{
        category     : React.PropTypes.object.isRequired,
        level        : React.PropTypes.object.isRequired,
        title        : React.PropTypes.string.isRequired,
        description  : React.PropTypes.string.isRequired, 
        location     : React.PropTypes.string.isRequired,
        date         : React.PropTypes.date.isRequired,
        time         : React.PropTypes.string.isRequired,

    }, */


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
	          	<form action="#">
	          		 <input type = "checkbox" id="family-friendly" />
	          		 <label for = "Family Friendly">Is your Go Family Friendly?</label>
	          	</form>	
	        </div>
	        <div className="input-field col s6">
	          	<form action="#">
	          		<input type = "checkbox" id="family-friendly" />
	          		<label for = "Pet Friendly">Is your Go Pet Friendly?</label>
	          	</form>
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

ReactDOM.render(<FormBox />, document.getElementById('formbox'));
