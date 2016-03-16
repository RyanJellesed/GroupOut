MapboxLoader = React.createClass({
  mixins: [ReactMeteorData],

  propTypes: {
    accessToken: React.PropTypes.string.isRequired,
    plugins: React.PropTypes.array,
    children: React.PropTypes.node.isRequired
  },

  getDefaultProps() {
    return {
      plugins: []
    }
  },

  getMeteorData() {
    return {
      loaded: Mapbox.loaded()
    }
  },

  componentWillMount() {
    Mapbox.load({
      plugins: this.props.plugins
    });
  },

  render() {
    if (this.data.loaded) {
      L.mapbox.accessToken = this.props.accessToken;
      return this.props.children;
    } else {
      return null;
    }
  }
});