var React = require('react');
var ReactDOM = require('react-dom');
//var MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');
var PortraitContainer = require('./containers/PortraitContainer');
var Appbar = require('muicss/lib/react/appbar');
var createStore = require('redux')
var Provider = require('react-redux')

let store = createStore(todoApp)

const App = () => (
  <div>
  <Provider store={store}>
    <Appbar></Appbar>
    <PortraitContainer/>
  </Provider>
  </div>
);

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)
