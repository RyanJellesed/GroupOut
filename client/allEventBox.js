var React = require('react');
var GoCard = require('./goCard');

var AllEventBox = React.createClass({
  render: function() {
    console.log(this.props.events);
    var eventMap = this.props.events.map(function(oneEvent) {
        return (
            <GoCard
              id = {oneEvent._id}
              creatorName = {oneEvent.creator.facebook.name}
              creatorImg = {oneEvent.creator.facebook.picture}
              joiners = {oneEvent.joiners}   
              category = {oneEvent.category.name}    
              img = {oneEvent.category.img}
              categoryIcon = {oneEvent.category.icon}
              title = {oneEvent.title}
              description = {oneEvent.description}
              location = {oneEvent.location}
              date = {oneEvent.date}
              time = {oneEvent.time}
              levelIcon = {oneEvent.level.icon}
              petFriendly = {oneEvent.petFriendly}
              familyFriendly = {oneEvent.familyFriendly}
              comments = {oneEvent.comments}
               />
          )
      });
    
    return (
      <div className="row">
        {eventMap}
      </div>
      )
    }
});

module.exports = AllEventBox;