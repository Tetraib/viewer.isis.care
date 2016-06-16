import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

 
 
// App component - represents the whole app
export default class App extends Component {
 
  render() {
    return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <AppBar title="viewer.isis.care" iconElementLeft={<span></span>}/>
    </MuiThemeProvider>
    );
  }
}