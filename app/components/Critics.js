var React = require('react');
var Panel = require('muicss/lib/react/panel');
var Row = require ('muicss/lib/react/row');
var Col = require ('muicss/lib/react/col');
var Critic = require('./Critic');

var c = [{
  author: "John",
  text: "Dinosaurs are like chicken",
  votes: 8,
  voteFunc: function(){}
},
{
  author: "Bob",
  text: "GGRROAAAARRRRRRR",
  votes: 6,
  voteFunc: function(){}
}
]


var Critics = React.createClass({
  render: function(){
    return(
      <div>
			<Col md="8">
			<Panel>
				<Row>
          <h1>CRITICS</h1>
            {c.map(function(value) {
                return <Critic critic={value}/>
            })}
        </Row>
      </Panel>
      </Col>
      </div>
    )
  }
});

module.exports = Critics
