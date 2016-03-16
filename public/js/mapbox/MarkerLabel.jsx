MarkerLabel = React.createClass({

  contextTypes: {
    marker: React.PropTypes.object.isRequired,
    map: React.PropTypes.object.isRequired
  },

  propTypes: {
    noHide: React.PropTypes.bool,
    direction: React.PropTypes.string,
    offset: React.PropTypes.arrayOf(React.PropTypes.number),
    className: React.PropTypes.string,
    children: React.PropTypes.node
  },

  getDefaultProps() {
    return {
      noHide: false,
      direction: 'right',
      offsetX: 12,
      offsetY: -15,
      className: ''
    }
  },

  componentWillMount() {
    this._create();
  },

  componentWillUnmount() {
    this._destroy();
  },

  _create() {
    this.context.marker.bindLabel(React.renderToString(this.props.children), {
      direction: this.props.direction,
      offset: this.props.offset,
      className: this.props.className
    });
  },

  _destroy() {
    this.context.marker.unbindLabel();
  },

  render() {
    this.context.marker.setLabelNoHide(this.props.noHide);
    this.context.marker.updateLabelContent(React.renderToString(this.props.children));
    return null;
  }
});
