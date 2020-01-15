import React, { Component } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Tabs from "@material-ui/core/Tabs";
import Dialog from "./Dialog/DialogInput";
import DialogOutput from "./Dialog/DialogOutput";
import DialogUpdate from "./Dialog/DialogUpdate";
import DialogAddDate from "./Dialog/DialogAddDate";
import DialogAddEvent from "./Dialog/DialogAddEvent";
import DialogAddPeople from "./Dialog/DialogAddPeople";
import axios from "axios";

let tutorialSteps1 = [
  {
    label: "Digital Closet Logo",
    imgPath: "https://www.graphicsprings.com/filestorage/stencils/7a0dcc38c57d7746e456c1c6af88b735.png?width=500&height=500"
  },
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
  },
  {
    label: "Bird",
    imgPath: "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 600,
    flexGrow: 1
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default
  },
  img: {
    overflow: "hidden",
    display: "block",
    width: "100%"
  },
  title: {
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    height: 50,
    paddingLeft: theme.spacing(1),
    backgroundColor: theme.palette.background.default
  }
}));

export default function TextMobileStepper() {


  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  let maxSteps = tutorialSteps1.length;
  localStorage.setItem("currentTop", activeStep);

  
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };


  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  let currentUser = localStorage.getItem("currentUser");
  let userTops = [];   
  

  const pullTops = () => {
    axios.get("http://localhost:4000/api/get-tops/" + currentUser).then(function (res) {
        userTops = res;
        console.log(userTops);
        tutorialSteps1 = [];

        for( let i=0; i<userTops.data.length; i++) {
          let label = userTops.data[i].brand + "_" + userTops.data[i].color + "_" + userTops.data[i].type;
          let imgPath = userTops.data[i].picture;
          let oneTop = {
            label: label,
            imgPath: imgPath
          };
          tutorialSteps1.push(oneTop);
        }
        console.log(tutorialSteps1);
        maxSteps = tutorialSteps1.length;
        
      }).catch(function (error) {
          console.log(error);
      })    
  }

  


// AT THIS POINT STARTED ADDING CODE TO PUSH PROPS

  return (
    <div className={classes.root}>
      <Paper>
        <Tabs>
          {/* <Typography className={classes.title}>Your Tops</Typography> */}
          <Dialog></Dialog>
          <button className="btn btn-primary purple" color="inherit" onClick={pullTops}>Your Tops</button>
          <DialogOutput></DialogOutput>
          <DialogAddDate></DialogAddDate>
          <DialogAddEvent></DialogAddEvent>
          <DialogAddPeople></DialogAddPeople>
        </Tabs>
      </Paper>
      <img className={classes.img} src={tutorialSteps1[activeStep].imgPath} alt={tutorialSteps1[activeStep].label} />
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
  
}

