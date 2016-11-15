var React = require('react');
var Movie = require('../components/Movie');
var Rating = require('../components/Rating');
var Critics = require('../components/Critics');

var PortraitContainer = React.createClass({
	render: function(){
		return (
      <div>
        <Movie/>
        <Rating/>
      </div>
		)
	}
});

module.exports = PortraitContainer;
