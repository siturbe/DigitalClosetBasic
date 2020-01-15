import React from 'react';
import HomeBtn from './HomeBtn';
import Card from './HomeMenuCard';
import { Paper } from '@material-ui/core';
import { useAuth0 } from '../contexts/auth0-context';


function HomeMenuBody(props) {
  const styles = {
    bodyStyle: {
      display: "flex",
      alignItems: "center"
      

    },
    picBtn: { 
      display: "flex",
      flexDirection: 'column',
      margin: '20px',
      alignItems: "stretch"

    },

    Image: {
      height: '200px',
      width: '200px'
    }
  }

  const { img, title, link } = props
  const { isLoading, user, loginWithRedirect, logout } = useAuth0();

  const handleNoUser = () => {
    alert("Please login to continue to your closet")
  }
   

  return (
    <Paper elevation={24}>
      <div style={styles.bodyStyle}>
      <div style={styles.picBtn}> 
        <Card img={img} alt={title} />

        {!isLoading && !user && (
        <button className="btn btn-primary purple" onClick={loginWithRedirect}>Please Login to Your Closet</button>
        )}
        {!isLoading && user && (
        <HomeBtn title={title} className="btn" link={link} />
        )}
      </div>
      
      

    </div>

    </Paper>
    
    
    // use mixins for flex here
  ) 
}

export default HomeMenuBody


