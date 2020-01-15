import React from 'react';
import { Link } from "react-router-dom";
import RevealList from './RevealList';

function ArticleCarouselItem(props) {
  const styles = {
    item: {
      height: "100%",
      width: "1",
      margin: "0"
    }
    
  }  
  
  const { name, id, type, image, keywords, goesWith} = props
  

  return (
    
    
    <a className="carousel-item" href="#one!" style={styles.item}>
            <div className="card sticky-action">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={image} alt={name}  />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{name}<i className="material-icons right">more_vert</i></span>
                {/* <p><a href="#">This is  link</a></p> */}
              </div>
              
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{name}<i className="material-icons right">close</i></span>
                  <RevealList 
                    id={id}
                    keywords={keywords}
                    goesWith={goesWith}
                  />
              </div>
              <div className="card-action">
                <button href="#">Edit</button>
                <button href="#">Remove</button>
              </div>
            </div>
          </a>
  )
}

export default ArticleCarouselItem;