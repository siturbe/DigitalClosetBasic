import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


const styles = muiBaseTheme => ({
  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  media: {
    paddingTop: "56.25%"
  },
  content: {
    textAlign: "left",
    padding: muiBaseTheme.spacing.unit * 3
  },

  heading: {
    fontWeight: "bold"
  },
  subheading: {
    lineHeight: 1.8
  }
});
export default function closetItemCard(classes) {
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={"https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"} />
      <CardContent className={classes.content}>
        <Typography className={"MuiTypography--heading"} variant={"h6"} gutterBottom>
          Nature Around Us
        </Typography>
        <Typography className={"MuiTypography--subheading"} variant={"caption"}>
          We are going to learn different kinds of species in nature that live together to form amazing environment.
        </Typography>
      </CardContent>
    </Card>
  );
}
