var React = require('react');
var ReactDOM = require('react-dom');
//var MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');
var PortraitContainer = require('./containers/PortraitContainer');
var Appbar = require('muicss/lib/react/appbar');


const App = () => (
  <div>
  <Appbar></Appbar>
  <PortraitContainer/>
  </div>
);

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)
