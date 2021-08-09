import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
import Feed from './components/Feed.js'
import './App.css';

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    justifyContent: "center",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography>Plugs</Typography>
      <Feed />
    </div>
  );
}

export default App;
