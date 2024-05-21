import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 1640,
     background : 'rgba(146,216,246,60%)',
    marginTop:0,
    
    
  },
  media: {
    height: 440,
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize : '2rem',
    color: 'black',
  },
  desc: {
    fontFamily: 'Nunito',
    fontSize: '1.1rem',
    color: 'black',
  },
});

export default function CardFeatured() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={process.env.PUBLIC_URL + "/Images/feature.jpg"}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" align="center" component="h2" className={classes.title}>
          LOOKING FOR A LAPTOP FOR WORK AND PLAY? 
          </Typography>
          <Typography variant="body2" align="center" color="textSecondary" component="p" className={classes.desc}>
          Then say hello to all new MSI gaming laptop series Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
  );
}
