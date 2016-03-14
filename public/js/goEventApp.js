var GoEventApp = React.createClass({

  propTypes: {
    url: React.PropTypes.string.isRequired
  },

  getInitialState: function(){
    return {
    }
  },

  loadTweetsFromServer: function(keyword){
    var self = this;
    $.ajax({
      url: this.props.url + keyword,
      method: 'GET'
    }).done(function(data){
      console.log(data)
      self.setState({tweets: data})
    })
  },
  componentDidMount: function(){
    this.loadTweetsFromServer(this.state.keyword)
  },



});

React.render(<GoEventApp url="/api/tweets/"/>,
  document.getElementById('goEvent-app'));