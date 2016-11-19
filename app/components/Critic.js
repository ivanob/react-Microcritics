var React = require('react');
var Panel = require('muicss/lib/react/panel');
var Button = require('muicss/lib/react/button');

var Critic = React.createClass({
  render: function(){
    return (
      <Panel>
        <div className="mui--text-headline">{this.props.critic.votes}</div>
        <blockquote cite="http://www.worldwildlife.org/who/index.html">
          {this.props.critic.text}
        </blockquote>
        <Button size="small" color="primary" variant="fab">+</Button>
        <div className="mui--text-headline">{this.props.critic.author}</div>
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
