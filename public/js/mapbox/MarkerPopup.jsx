MarkerPopup = React.createClass({

  contextTypes: {
    marker: React.PropTypes.object.isRequired,
    map: React.PropTypes.object.isRequired
  },

  propTypes: {
    options: React.PropTypes.object,
    onClick: React.PropTypes.func,
    children: React.PropTypes.node.isRequired
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
    const popup = L.popup(this.props.options);
    this.context.marker.bindPopup(popup);
    this.setState({popup});
  },

  _listen() {
    this.state.popup.on('click', this.props.onClick);
  },

  _destroy() {
    this.state.popup.clearAllEventListeners();
    this.context.marker.unbindPopup();
    this.context.map.removeLayer(this.state.marker);
  },

  render() {
    this.state.popup.setContent(React.renderToString(this.props.children));
    return null;
  }
});