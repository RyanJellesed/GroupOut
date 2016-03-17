
var React = require( 'react');
var SelectField = require('material-ui/lib/select-field');
var MenuItem = require('material-ui/lib/menus/menu-item');


var DropDownCategories= React.createClass({
    getInitialState: function() {
      return {
        value: ""
      }
    },
    handleChange: function(event, index, value) {
      this.setState({value: value})
    },
    render: function() {
      var actualValues = this.props.categories.map(function(e){
        return <MenuItem value={e._id} primaryText={e.name} />
      })
        return (
            <div className="row">
              <div className="col s6">
                <SelectField value={this.state.value} onChange={this.handleChange}>
                  { actualValues }
                </SelectField>
              </div>
            </div>
            )
    }

});

var DropDownLevels= React.createClass({
    getInitialState: function() {
      return {
        value: ""
      }
    },
    handleChange: function(event, index, value) {
      this.setState({value: value})
    },
    render: function() {
      var actualValues = this.props.levels.map(function(e){
        return <MenuItem value={e._id} primaryText={e.name} />
      })
        return (
            <div className="row">
              <div className="col s6">
                <SelectField value={this.state.value} onChange={this.handleChange}>
                  { actualValues }
                </SelectField>
              </div>
            </div>
            )
    }

});

var DropDowns = React.createClass({
    render: function() {
        return (
            <div>
                <DropDownCategories categories={ this.props.categories } />
                <DropDownLevels levels={this.props.levels} />
            </div>
            )
    }

});

module.exports = DropDowns;