'use strict';

Globals.Map = React.createClass({

  propTypes: {
    mapId: React.PropTypes.string.isRequired,
    options: React.PropTypes.object,
    children: React.PropTypes.node
  },

  getInitialState() {
    return {
      map: null
    }
  },

  childContextTypes: {
    map: React.PropTypes.object
  },

  getChildContext() {
    return {
      map: this.state.map
    };
  },

  componentDidMount() {
    this.setState({
      map: L.mapbox.map('map-container', this.props.mapId, this.props.options)
    });
  },

  componentWillUnmount() {
    this.state.map.remove();
  },

  render() {
    return (
      <div id="map-container">
        {this.state.map ? this.props.children : null}
      </div>
    )
  }
});