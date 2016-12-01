var React = require('react');
var Panel = require('muicss/lib/react/panel');
var Row = require ('muicss/lib/react/row');
var Col = require ('muicss/lib/react/col');

const divStyle = {
  padding: '5%'
};

var Rating = React.createClass({
  render: function(){
    return(
      <div>
  			<Col md="8">
    			<Panel style={divStyle}>
            <Row>
              <h1>RATING: {this.props.rating}</h1>
            </Row>
          </Panel>
        </Col>
      </div>
    )
  }
});

module.exports = Rating;
