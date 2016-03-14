var AllEventBox = React.createClass({
  render: function() {
    console.log(this.props.events);
    var eventMap = this.props.events.map(function(oneEvent) {
        return (
            <GoCard
              creator = {oneEvent.creator}
              joiners = {oneEvent.joiners}   
              category = {oneEvent.category.name}    
              img = {oneEvent.category.img}
              title = {oneEvent.title}
              description = {oneEvent.description}
              location = {oneEvent.location}
              date = {oneEvent.date}
              time = {oneEvent.time}
              level = {oneEvent.level}
              petFriendly = {oneEvent.petFriendly}
              familyFriendly = {oneEvent.familyFriendly}
              comments = {oneEvent.comments}
               />
          )
      });
    
    return (
      <div>
        {eventMap}
      </div>
      )
    }
});