var React = require('react');
var Panel = require('muicss/lib/react/panel');
var Button = require('muicss/lib/react/button');
var Row = require('muicss/lib/react/row')
var Col = require('muicss/lib/react/col')

var Critic = React.createClass({
  render: function(){
    return (
      <Panel>
      <Row>
        <Col md="1">
          <div className="mui--text-headline">{this.props.critic.votes}</div>
        </Col>
        <Col md="5">
          <blockquote cite="http://www.worldwildlife.org/who/index.html">
            {this.props.critic.text} - {this.props.critic.author}
          </blockquote>
        </Col>
        <Col md="1">
          <Button size="small" color="primary" variant="fab">+</Button>
        </Col>
      </Row>
      </Panel>
    )
  }
});

Critic.propTypes = {
  votes : React.PropTypes.number,
  text : React.PropTypes.string,
  author: React.PropTypes.string,
  voteFunc: React.PropTypes.func
}

module.exports = Critic;
