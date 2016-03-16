Marker = React.createClass({

  contextTypes: {
    map: React.PropTypes.object.isRequired
  },

  propTypes: {
    latlng: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]).isRequired,
    options: React.PropTypes.object,
    onClick: React.PropTypes.func,
    children: React.PropTypes.node
  },

  childContextTypes: {
    marker: React.PropTypes.object
  },

  getChildContext() {
    return {
      marker: this.state.marker
    };
  },

  componentWillMount() {
    this._create();
  },

  componentDidMount() {
    this._listen();
  },

  componentWillUnmount() {
    this._destroy();
  },

  _create() {
    const marker = L.marker(this.props.latlng, this.props.options);
    this.context.map.addLayer(marker);
    this.setState({marker});
  },

  _listen() {
    this.state.marker.on('click', this.props.onClick);
  },

  _destroy() {
    this.state.marker.clearAllEventListeners();
    this.context.map.removeLayer(this.state.marker);
  },

  render() {
    return <div>{this.props.children}</div>;
  }
});