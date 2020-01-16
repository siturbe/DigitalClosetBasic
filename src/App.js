import React from 'react';
import 'bulma/css/bulma.css';
import { AppBar, Toolbar, Typography, Button, IconButton, Grid, Paper, Tab, Tabs, withStyles } from "@material-ui/core";
import Header from './components/Header.component';
import Background from "../src/purpleFabric.jpg"
import { makeStyles, useTheme, withTheme } from "@material-ui/core/styles";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import ClosetPage from "./pages/ClosetPage";
import OutfitPage from "./pages/OutfitPage";
import ArticlePage from "./pages/ArticlePage";

import "./App.css";

import Login from './components/Login.component'

// import user here

const useStyles = makeStyles(theme => ({
  "@global":{
      body: {
          backgroundImage: "url('/images/purpleFabric.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          height: "100%"
      },
      html: {
        height: "100%"
      }
  }
}))

function App() {
  
  return (
    <Router>
      <div>
        <Header />
          <Grid container fluid>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/closetPage" component={ClosetPage} />
              <Route exact path="/outfitPage" component={OutfitPage} />
              <Route exact path="/articlePage" component={ArticlePage} />
              <Route exact path="/auth"><Login /></Route>
            </Switch>
        </Grid>
      </div>
    </Router>
  );
}

export default withStyles(useStyles) (App);