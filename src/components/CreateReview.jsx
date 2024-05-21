import React, { Component } from 'react';
import { Rating } from '@material-ui/lab';
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
       
        padding: "120px 20px",
    },
    formColor: {
        background: "#FFFFFF",
    },
  }));
  export default function HalfRating() {
    const classes = useStyles();
        return (
            
            <div className={classes.form1}>
                
                <Typography gutterbottom variant= "h3" align="center" color="primary">
                    Create Review
                    </Typography>

                <Card className={classes.formColor} style= {{maxWidth:450, margin:"0 auto", padding:"20px 5px"}}>
                    <CardContent>
                        <form >
                        <Grid container spacing={1} >

                    <Grid xs={12}  item>
                        <TextField label="Product Model" placeholder="Enter Product Model" variant="outlined" fullWidth required/>
                    </Grid>
                    <Grid xs={12}  item >
                        <h2 className={classes.roottitle}>Rating</h2>
                        <div className={classes.root}>
                          <Rating name="half-rating" defaultValue={0} precision={0.1} />
                          </div>
                    </Grid>
                    <Grid xs={12} item>
                        <TextField label="Title" placeholder="Enter Title" variant="outlined" fullWidth required/>
                    </Grid>
                    <Grid xs={12}  item>
                        <TextField label="Description" multiline rows = {4} placeholder="Enter Description" variant="outlined" fullWidth/>
                    </Grid>
                    <Grid xs={12}  item>
                        <Button type="submit" variant="contained" color="primary" fullWidth > Submit </Button>
                     </Grid>
                        </Grid>
                        </form>
                        
                      
  
                    </CardContent>
                </Card>
            </div>
        );
    }