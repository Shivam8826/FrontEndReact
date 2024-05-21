import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardContent, Card, Grid, TextField, Typography, Button, CardActionArea } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      '& > * + *': {
        marginTop: theme.spacing(1),
      },
    },
    roottitle:{
        color:"#2d71d6",
    },
    form1:{
        marginTop: 10,
       
        minHeight: '100vh',
  backgroundImage: `url(${process.env.PUBLIC_URL + '/Images/BG2.jpeg'})`,
  backgroundRepeat: 'no-repeat',
    },
    formColor: {
        background: "#FFFFFF",
    },
    Text: {
        margin: 10,
    }
  }));
  export default function HalfRating() {
    const classes = useStyles();
        return (
            <div className={classes.form1}>
                
               

                <Card className={classes.formColor} style= {{maxWidth:450, margin:"0 auto", padding:"20px 5px"}}>
                    <CardContent>
                        <form >
                        <Typography className={classes.Text} gutterbottom variant= "h3" align="center" color="primary">
                   Compare Product
                    </Typography>
                        <Grid container spacing={2} >

                    <Grid xs={12}  item>
                        <TextField label="Product Model 1" placeholder="Enter Product Model 1" variant="outlined" fullWidth required/>
                    </Grid>
                    <Grid xs={12} item>
                        <TextField label="Product Model 2" placeholder="Enter Product Model 2" variant="outlined" fullWidth required/>
                    </Grid>
                    <Grid xs={12}  item>
                        <Button type="submit" variant="contained" color="primary" fullWidth >
                             Submit
                              </Button>
                     </Grid>
                        </Grid>
                        </form>
                    </CardContent>
                </Card>
            </div>
        );
    }
