import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';


injectTapEventPlugin();
 
// App component - represents the whole app
export default class App extends Component {
   
  render() {
     

    return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
            <AppBar title="M. Jean DUPONT" iconElementLeft={<span></span>} />
            {this.props.children}
  

            
        </div>
    </MuiThemeProvider>
    );
  }
}