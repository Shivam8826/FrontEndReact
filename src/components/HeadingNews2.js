import React from "react";
import { CssBaseline, makeStyles, Typography } from '@material-ui/core';
import LineStyleIcon from '@material-ui/icons/LineStyle';
import { blue } from "@material-ui/core/colors";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
       
        alignItems: 'center',
        position: 'center',
        marginLeft:820,
        marginTop:-160,
        marginBottom: 0,
        fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize : '3rem',
    color: 'black',
    
    },
}));
export default function () {
    const classes = useStyles();
    return <div className={classes.root}>
        
        <b1 >
        {/* <LineStyleIcon style={{ color: blue[900] }} fontSize="large" />  */}
        FEATURED 
        <Grid container spacing={1}>

        </Grid>
        </b1>
        <b2 >
      
        </b2>


    </div>;
}