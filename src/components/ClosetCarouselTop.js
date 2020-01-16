import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Tabs from "@material-ui/core/Tabs";
import Dialog from "./Dialog/DialogInput";
import DialogOutput from "./Dialog/DialogOutput";
import DialogAddDate from "./Dialog/DialogAddDate";
import DialogAddEvent from "./Dialog/DialogAddEvent";
import DialogAddPeople from "./Dialog/DialogAddPeople";
import axios from "axios";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Input} from "../components/Form";
import "./Brands.css";


let tutorialSteps1 = [
  {
    label: "Digital Closet Logo",
    imgPath: "https://www.graphicsprings.com/filestorage/stencils/7a0dcc38c57d7746e456c1c6af88b735.png?width=500&height=500"
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 380,
    flexGrow: 1,
    alignContent: "center"
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 40,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default
  },
  img: {
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
  },
  colorInput: {
    margin:  theme.spacing(1),
    width: 300,
  }
}));

export default function TextMobileStepper() {

  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  let maxSteps = tutorialSteps1.length;
  localStorage.setItem("currentTop", activeStep);

  const [colorSearch, setColorSearch] = useState("Color");

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };


  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const [checked, setChecked] = React.useState(true);

  const handleChange = event => {
    setChecked(event.target.checked);
  };

  let currentUser = localStorage.getItem("currentUser");
  let userTops = [];   
  
  localStorage.setItem("colorFilter", checked)
  localStorage.setItem("colorVar", colorSearch.toLowerCase())

  const pullTops = () => {
    let colorVar = colorSearch.toLowerCase();
    if(checked == false ){
      axios.get("/api/get-tops/" + currentUser).then(function (res) {
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
      
          setActiveStep(1);
          setActiveStep(0);
          
        }).catch(function (error) {
            console.log(error);
        })   
    } else if (colorSearch == "Color"){
      alert("Please enter a color, or uncheck the color filter")
    } else {

      axios.get("/api/get-tops/" + currentUser + "/" + colorVar).then(function (res) {
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
      
          setActiveStep(1);
          setActiveStep(0);
          
        }).catch(function (error) {
            console.log(error);
        })   


    }
        
  }

  const handleShopping = () => {
    // setAnchorEl(null);
    window.location.href="/outfitPage";
  };
  


// AT THIS POINT STARTED ADDING CODE TO PUSH PROPS

  return (
    <div className={classes.root}>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox checked={checked} onChange={handleChange} value="primary" color="purple" />
            }
            label="Filter by Color (Enter Color Below)"
          />
        </FormGroup>
        <Input 
            name="colorSearch"
            value={colorSearch}
            onChange = {e => setColorSearch(e.target.value)}
            />
        <Tabs>
          {/* <Typography className={classes.title}>Your Tops</Typography> */}
          <Dialog></Dialog>
          <button className="btn btn-primary purple" color="inherit" onClick={pullTops}>Pull Your Tops</button>
          <DialogOutput></DialogOutput>
        </Tabs>
      <img className={classes.img} src={tutorialSteps1[activeStep].imgPath} alt={tutorialSteps1[activeStep].label} />
        <Tabs>
          <DialogAddDate></DialogAddDate>
          <DialogAddEvent></DialogAddEvent>
          <DialogAddPeople></DialogAddPeople>
        </Tabs>
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
      <button className="btn btn-primary purple" onClick={handleShopping}>Let's Go Shopping!</button>
    </div>
  );
  
}

