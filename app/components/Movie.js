var React = require('react');
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
	          <div className="mui--text-title">Title: </div> {this.props.info.title}
				</Row>
				<Row>
	          <div className="mui--text-title">Director: </div> {this.props.info.director}
				</Row>
				<Row>
	          <div className="mui--text-title">Year: </div> {this.props.info.year}
				</Row>
			</Panel>
			</Col>
			</div>
    )
	}
});

module.exports = Movie;
