MarkerDivIcon = React.createClass({

  contextTypes: {
    marker: React.PropTypes.object.isRequired
  },

  propTypes: {
    iconSize: React.PropTypes.arrayOf(React.PropTypes.number),
    iconAnchor: React.PropTypes.arrayOf(React.PropTypes.number),
    popupAnchor: React.PropTypes.arrayOf(React.PropTypes.number),
    className: React.PropTypes.string,
    children: React.PropTypes.node.isRequired
  },

  getDefaultProps() {
    return {
      className: ''
    }
  },

  render() {
    const {iconSize, iconAnchor, popupAnchor, className, children} = this.props;
    const icon = L.divIcon({iconSize, iconAnchor, popupAnchor, className, html: React.renderToString(children)});
    this.context.marker.setIcon(icon);
    return null;
  }
});

/*
 var myIcon = L.icon({
 iconUrl: 'my-icon.png',
 iconRetinaUrl: 'my-icon@2x.png',
 iconSize: [38, 95],
 iconAnchor: [22, 94],
 popupAnchor: [-3, -76],
 shadowUrl: 'my-icon-shadow.png',
 shadowRetinaUrl: 'my-icon-shadow@2x.png',
 shadowSize: [68, 95],
 shadowAnchor: [22, 94]
 });
 */

