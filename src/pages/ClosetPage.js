import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button, IconButton, Grid, Paper, Tab, Tabs } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import ArticleCarouselItem from "../components/ArticleCarouselItem";
import TextMobileStepper from "../components/ClosetCarouselTop";
import TextBottomStepper from "../components/ClosetCarouselBottom";
import closetItemCard from "../components/closetItemCard";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper:{
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function ClosetPage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  const style = {
    paper: {
      padding: 5,
      margin: 25,
      width: "100%",
      backgroundColor: "lightGray",
      height: "100vh",
      textAlign: "center"
    }
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center">
          
        <Grid item xs={12} style={style.paper} justify="center" >
          <Tabs>
            <TextMobileStepper />
          </Tabs>
        </Grid>
      </Grid>
    </div>
  );
}
