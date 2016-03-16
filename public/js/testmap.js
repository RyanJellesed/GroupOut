var TestMap = React.createClass({
  render: function() { 
    const opts = {
      accessToken: 'pk.eyJ1IjoicnlhbmplbGxlc2VkIiwiYSI6ImNpbHYwa21idjAxZ2V2Z2tzemViM3JlbngifQ.jZC58IvhNnH039OGw5UVFQ'
    }

    return (
        <Map mapId="ryanjellesed.pe53lo3g" options={opts} style={{height: '500px'}}></Map>
      )
  }
});