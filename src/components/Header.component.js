import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useAuth0 } from '../contexts/auth0-context';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'

// Comment marks where tarted making functional changes
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  // menuButton: {
  //   marginRight: theme.spacing(2)
  // },
  title: {
    flexGrow: 1
  }
}));

export default function Header() {
  const { isLoading, user, loginWithRedirect, logout } = useAuth0();

  const classes = useStyles();
  return (
    <div className={classes.root}>
    <AppBar position="static" className="purple" maxWidth="100%">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <SimpleMenu />
        </IconButton>
        <Typography variant="h4" className={classes.title}>
          Digitial Closet
        </Typography>
        {/* <Button color="inherit">Login</Button> */}

      </Toolbar>
    </AppBar>
  </div>
  );
}

//AFter made changes but not tested - working spot

function SimpleMenu(){
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { isLoading, user, loginWithRedirect, logout } = useAuth0();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleHome = () => {
    // setAnchorEl(null);
    window.location.href="/";
  };

  const handleLogout = () => {
    logout();
    window.location.herf="/";
  }

  return (
    <div>
      <Button className="purple" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {!isLoading && !user && (
          <>
        <MenuItem href="/" onClick={handleHome}>Home</MenuItem>
        <MenuItem onClick={loginWithRedirect}>Login</MenuItem>
        </>
        )}
        {!isLoading && user && (
          <>
        <MenuItem onClick={handleHome} >Home</MenuItem>
        <MenuItem onClick={handleClose}>{user.name}</MenuItem>
        <MenuItem 
          onClick={handleLogout}
          >Logout</MenuItem>
        </>
        )}
      </Menu>
    </div>
  );
}
