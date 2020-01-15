import React from 'react';
import { Link } from "react-router-dom";

function HomeBtn(props) {
  const styles = {
    homeBtnStyle: {
      width: "200px"

    }
  }

  const link = props.link;
  

  return (
    <Link to={link}><button className="waves-effect waves-light btn purple" style={styles.homeBtnStyle}>{props.title}</button></Link>
  )
}

export default HomeBtn;