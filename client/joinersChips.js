var React = require('react');

var JoinersChips = React.createClass({
    render: function() {
        var joinersArr = this.props.joinerschips;
        var joinersChipMap = joinersArr
        	.map(function(joiner) {
        		return (
        			<div className="chip">
    					<img src={joiner.facebook.picture} />
    					{joiner.facebook.name}
  					</div>
        			)
        	})
        return (
            <div className= "row overflowchip">
                {joinersChipMap}
            </div>
            )
    }

});

module.exports = JoinersChips;