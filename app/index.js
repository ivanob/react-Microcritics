var React = require('react');
var ReactDOM = require('react-dom');
//var MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');
var Movie = require('./Movie.js');


const App = () => (
  <Movie/>
);

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)
