import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: 1000,
    
    background : 'rgba(140,230,251,70%)',
    margin: "10px",
    marginTop:0,
    marginBottom:0,
    marginLeft: 350,
  
    
  },
  media: {
    height: 0,
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize : '1.5rem',
    color: 'black',
  },
  desc: {
    fontFamily: 'Nunito',
    fontSize: '1.1rem',
    color: 'black',
  },
  
});

export default function Card5() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={process.env.PUBLIC_URL + "/Images/card55.jpg"}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" align="center" component="h2" className={classes.title}>
          Create an account today to be a part of the community!
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center" component="p" className={classes.desc}>
          A wonderful serinity has taken possession of my entire soul
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" align="center" color="primary" fullWidth>
          SIGN UP
        </Button>
        
      </CardActions>
    </Card>
  );
}
