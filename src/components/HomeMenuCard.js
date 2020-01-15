import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card,
        CardActionArea,
        CardActions,
        CardMedia,
        Button } from '@material-ui/core/';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 250,
  },
});

export default function MediaCard(props) {
  
  const 
    classes = useStyles(),
    { img, alt } = props

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title={alt}
        />
        
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
}