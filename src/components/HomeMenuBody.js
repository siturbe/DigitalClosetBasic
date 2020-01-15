import React from 'react';
import HomeBtn from './HomeBtn';
import Card from './HomeMenuCard';
import { Paper } from '@material-ui/core';

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
 
   

  return (
    <Paper elevation={24}>
      <div style={styles.bodyStyle}>
      <div style={styles.picBtn}> 
        <Card img={img} alt={title} />

        {/* <img src={img} alt={title} style={styles.Image} /> */}
        <HomeBtn title={title} className="btn" link={link} />
      </div>
      
      

    </div>

    </Paper>
    
    
    // use mixins for flex here
  ) 
}

export default HomeMenuBody


