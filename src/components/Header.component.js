import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useAuth0 } from '../contexts/auth0-context';


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
    <AppBar position="static" className="purple">
      <Toolbar>
        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h4" className={classes.title}>
          Digitial Closet
        </Typography>
        {/* <Button color="inherit">Login</Button> */}
        <div className="navbar-end">
              {/* if there is no user. show the login Button */}
              {!isLoading && !user && (
                <>
                <Button className="navbar-item" href="/">Home</Button>
                <Button onClick={loginWithRedirect} className="navbar-item">
                  Login
                </Button>
                </>
              )}
              {/* if there is a user. show user name and logout Button */}
              {!isLoading && user && (
                <>
                  <Button className="navbar-item" href="/">Home</Button>
                  <Button className="navbar-item">{user.name}</Button>
                  <Button
                    onClick={() => logout({ returnTo: window.location.origin })}
                    className="navbar-item"
                  >
                    Logout
                  </Button>
                </>
              )}
            </div>
      </Toolbar>
    </AppBar>
  </div>
  );
}

