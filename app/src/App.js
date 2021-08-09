import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PowerIcon from '@material-ui/icons/Power';
import Feed from './components/Feed.js'
import './App.css';

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    justifyContent: "center",
  },
  navBar: {
    backgroundColor: "white"
  },
  menuIcon: {
    color: "black"
  },
  powerIcon: {
    color: "green",
    margin: "auto",
    transform: "rotate(-90deg)",
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navBar}>
          <Toolbar>
          <IconButton edge="start" aria-label="menu" className={classes.menuIcon}>
            <MenuIcon />
          </IconButton>
          <IconButton edge="start" aria-label="menu" className={classes.powerIcon}>
            <PowerIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Feed />
    </div>
  );
}

export default App;
