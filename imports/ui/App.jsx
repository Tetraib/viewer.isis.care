import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import {GridList, GridTile} from 'material-ui/GridList';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Link } from 'react-router'

injectTapEventPlugin();
 
// App component - represents the whole app
export default class App extends Component {
   
  render() {
     
const randomnum = () => {
    return Math.floor((Math.random() * 8) + 1);
};
const tilesData = [
  {
    img: `http://lorempixel.com/200/200/nature/${randomnum()}`,
    key:"1",
    title: '10:14'
  },
  {
    img: `http://lorempixel.com/200/200/nature/${randomnum()}`,
    key:"2",
    title: '10:16'
  },
  {
    img: `http://lorempixel.com/200/200/nature/${randomnum()}`,
    key:"3",
    title: '10:16'
  },
  {
    img: `http://lorempixel.com/200/200/nature/${randomnum()}`,
    key:"4",
    title: '10:17'
  },
  {
    img: `http://lorempixel.com/200/200/nature/${randomnum()}`,
    key:"5",
    title: '10:21'
  },
  {
    img: `http://lorempixel.com/200/200/nature/${randomnum()}`,
    key:"6",
    title: '10:21'
  },
  {
    img: `http://lorempixel.com/200/200/nature/${randomnum()}`,
    key:"7",
    title: '10:21'
  },
  {
    img: `http://lorempixel.com/200/200/nature/${randomnum()}`,
    key:"8",
    title: '10:21'
  },
  {
    img: `http://lorempixel.com/200/200/nature/${randomnum()}`,
    key:"9",
    title: '10:21'
  },
  {
    img: `http://lorempixel.com/200/200/nature/${randomnum()}`,
    key:"10",
    title: '10:21'
  },
  {
    img: `http://lorempixel.com/200/200/nature/${randomnum()}`,
    key:"11",
    title: '10:21'
  }
  ];
    return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
            <AppBar title="M. Jean DUPONT" iconElementLeft={<span></span>} />
              <Card>
                <CardHeader
                  title="Aujourd'hui"
                  subtitle="10:23"
                  avatar="http://lorempixel.com/100/100/nature/"
                  actAsExpander={true}
                  showExpandableButton={true}
                />
                <CardMedia
                  expandable={true}
                >
                  <GridList
                  
                  cellHeight={373}
                  cols={5}
                  >
                    {tilesData.map((tile) => (
                      <GridTile
                        containerElement={<Link to="/about"/>}
                        key={tile.key}
                        // title=
                        // titlePosition="top"
                        // titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                        >
                          <img src={tile.img}/>

                      </GridTile>
                    ))}
                  </GridList>
              </CardMedia>
            </Card>
  

            
        </div>
    </MuiThemeProvider>
    );
  }
}