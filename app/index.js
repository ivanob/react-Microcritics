var React = require('react');
var ReactDOM = require('react-dom');
//var MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');
var PortraitContainer = require('./containers/PortraitContainer');


const App = () => (
  <PortraitContainer/>
);

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)
