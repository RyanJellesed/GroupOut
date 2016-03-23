var React = require('react');

var GoEventViewComments = React.createClass({
    render: function() {
    	console.log(this.props.comments);
		var commentsArray = this.props.comments;
	    var mapComments = commentsArray.map(function(oneComment){
	    	return (
	    		
	              
	                <li className="collection-item avatar">
	                <img className= "circle" src={oneComment.commentor.facebook.picture} />
	                <span className="title">{oneComment.commentor.facebook.name}</span>
	                <p> {oneComment.commentBody} </p>
	                </li>
	              
	           
	    		)
	    })

	    return (
	       	<div>
	       		<ul className="collection">
	       			{mapComments}
	       		</ul>
	       	</div>
	    )
    }

});

module.exports = GoEventViewComments;

