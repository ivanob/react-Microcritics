var React = require('react');
var ReactDOM = require('react-dom');
//var MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');
var PortraitContainer = require('./containers/PortraitContainer');
var Appbar = require('muicss/lib/react/appbar');
var createStore = require('redux')
//var Provider = require('react-redux')
var Input = require('muicss/lib/react/input')
var Button = require('muicss/lib/react/button')

//let store = createStore(App)
let s1 = {verticalAlign: 'middle'};
const App = () => (

  <div>
    <Appbar>
    <table width="100%">
         <tbody>
           <tr style={s1}>
              <td className="mui--appbar-height" width="30%">  <Input hint="Title"/> </td>
              <td className="mui--appbar-height">  <Button color="primary">Find</Button> </td>
           </tr>
          </tbody>
      </table>
    </Appbar>
    <PortraitContainer/>
  </div>
);

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)
