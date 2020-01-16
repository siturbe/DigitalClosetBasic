
import{
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
} from "react-router-dom";
import HomeMenuBody from './HomeMenuBody';
import homeMenuInfo from '../homeMenuBody.json';
import { useAuth0 } from '../contexts/auth0-context';


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledExpansionPanels() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { isLoading, user, loginWithRedirect, logout } = useAuth0();

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>My Closet</Typography>
          <Typography className={classes.secondaryHeading}>{homeMenuInfo.myCloset.para}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <HomeMenuBody 
              img={homeMenuInfo.myCloset.img}
              title={homeMenuInfo.myCloset.title}
              link={homeMenuInfo.myCloset.link}
            />
        </ExpansionPanelDetails>
      </ExpansionPanel>


      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Go Shopping</Typography>
          <Typography className={classes.secondaryHeading}>
            {homeMenuInfo.myOutfits.para}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <HomeMenuBody 

               img={homeMenuInfo.myOutfits.img}
                title={homeMenuInfo.myOutfits.title}
               link={homeMenuInfo.myOutfits.link}
             />
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
 
    </div>
  );
}