import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import axios from "axios";

import PersonIcon from '@material-ui/icons/Person';
import PictureIcon from '@material-ui/icons/Photo';
import BrandIcon from '@material-ui/icons/BrandingWatermark';
import ColorIcon from '@material-ui/icons/ColorLensRounded';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import ShirtIcon from '@material-ui/icons/ShoppingBasket';
import EventIcon from '@material-ui/icons/EmojiFoodBeverage';
import LabelIcon from '@material-ui/icons/Label';

//Starting to modify this file from here

const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: "pink",
    color: "purple"
  }
});

let currentUser = localStorage.getItem("currentUser");
let userTops = [];
let garmentData;

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, open, label, seenBy, events, dateWorn } = props;

  

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = value => {
    onClose();
  };


  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      {/* <DialogTitle id="simple-dialog-title">Input Item Info</DialogTitle> */}
      <List>
          <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <LabelIcon/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={label}/>
          </ListItem>

          <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
            <ListItemText primary={seenBy}/>
          </ListItem>

          <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <EventIcon />
                </Avatar>
              </ListItemAvatar>
            <ListItemText primary={events}/>
          </ListItem>

          <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <CalendarIcon />
                </Avatar>
              </ListItemAvatar>
            <ListItemText primary={dateWorn}/>
          </ListItem>
        {/* {emails.map(email => (
          <ListItem button onClick={() => handleListItemClick(email)} key={email}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))} */}

        <ListItem autoFocus button onClick={() => handleListItemClick()}>
          {/* <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar> */}
          <ListItemText primary="CLOSE" />
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);
  const [ label, setLabel ] = React.useState("No Description");
  const [ seenBy, setSeenBy ] = React.useState("No One Has Seen It");
  const [ events, setEvents ] = React.useState("No Events Noted");
  const [ dateWorn, setDateWorn ] = React.useState("No Date Noted");

  const handleClickOpen = () => {
    setOpen(true);

    const getGarmentData = () => {
        let activeStep = localStorage.getItem("currentTop");
        let colorFilter = localStorage.getItem("colorFilter");
        let colorVar = localStorage.getItem("colorVar");
        console.log(colorFilter);
        console.log(colorVar);

        if(colorFilter == "true"){
          axios.get("http://localhost:4000/api/get-tops/" + currentUser + "/" + colorVar).then(function (res) {
            userTops = res;
            let id = userTops.data[activeStep]._id;
            console.log(id);
            
            axios.get("http://localhost:4000/api/getGarmentData/" + id).then(function (result){
              console.log(result);
              let peopleSeen = result.data[0].peopleSeen;
              let dateWorn = result.data[0].dateWorn;
              let events = result.data[0].events;
              let label = result.data[0].brand + " " + result.data[0].color + " " + result.data[0].type;
              garmentData = { peopleSeen, dateWorn, events, label };
              let dateArray = [];
              for(let i=0; i<garmentData.dateWorn.length; i++){
                let dateobj = new Date(garmentData.dateWorn[i])
                let dateWornShort = dateobj.toLocaleDateString('en-US');
                dateArray.push(dateWornShort);
              }
              setLabel(garmentData.label);
              setSeenBy("Seen by:  " + garmentData.peopleSeen);
              setEvents("Worn to: " + garmentData.events);
              setDateWorn("Worn on: " + dateArray);
            })
          }).catch(function (error){
            console.log(error);
          })

          } else {
            axios.get("http://localhost:4000/api/get-tops/" + currentUser).then(function (res) {
              userTops = res;
              let id = userTops.data[activeStep]._id;
              console.log(id);
              
              axios.get("http://localhost:4000/api/getGarmentData/" + id).then(function (result){
                console.log(result);
                let peopleSeen = result.data[0].peopleSeen;
                let dateWorn = result.data[0].dateWorn;
                let events = result.data[0].events;
                let label = result.data[0].brand + " " + result.data[0].color + " " + result.data[0].type;
                garmentData = { peopleSeen, dateWorn, events, label };
                let dateArray = [];
                for(let i=0; i<garmentData.dateWorn.length; i++){
                  let dateobj = new Date(garmentData.dateWorn[i])
                  let dateWornShort = dateobj.toLocaleDateString('en-US');
                  dateArray.push(dateWornShort);
                }
                setLabel(garmentData.label);
                setSeenBy("Seen by:  " + garmentData.peopleSeen);
                setEvents("Worn to: " + garmentData.events);
                setDateWorn("Worn on: " + dateArray);
              })
            }).catch(function (error){
              console.log(error);
            })


          }
      }
    
    getGarmentData();


  };

  const handleClose = value => {
    setOpen(false);
    setSelectedValue(value);
  };
  

  return (
    <div>
      {/* <Typography variant="subtitle1">Selected: {selectedValue}</Typography>
      <br /> */}
      <button  className="btn btn-primary purple" color="inherit" onClick={handleClickOpen}>
        Get Info
      </button>
      <SimpleDialog 
            selectedValue={selectedValue} 
            open={open} 
            onClose={handleClose} 
            label={label} 
            seenBy={seenBy}
            events={events}
            dateWorn={dateWorn}
            />
    </div>
  );
}
