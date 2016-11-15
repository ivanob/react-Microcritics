var React = require('react');
var Appbar = require('muicss/lib/react/appbar');
var Button = require('muicss/lib/react/button');
var Panel = require('muicss/lib/react/panel');
var Row = require ('muicss/lib/react/row');
var Col = require ('muicss/lib/react/col');

var Movie = React.createClass({
	render: function(){
		return(
			<div>
			<Col md="4">
			<Panel>
				<Row>
					<img src="" alt="movie" width="200" height="400"/>
				</Row>
				<Row>
	          <div className="mui--text-title">Title: </div> Fake name
				</Row>
				<Row>
	          <div className="mui--text-title">Director: </div> Fake name
				</Row>
				<Row>
	          <div className="mui--text-title">Year: </div> 2008
				</Row>
			</Panel>
			</Col>
			</div>
    )
	}
});

module.exports = Movie;
