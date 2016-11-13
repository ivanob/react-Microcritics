var React = require('react');
var Appbar = require('muicss/lib/react/appbar');
var Button = require('muicss/lib/react/button');

var Movie = React.createClass({
	render: function(){
		return(
			<div>
          <Button>button</Button>
          <Button color="primary">button</Button>
			</div>
    )
	}
});

module.exports = Movie;
