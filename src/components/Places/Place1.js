import React from 'react';
import { makeStyles } from '@material-ui/core';
import Card1 from '../Card1';
import Card2 from '../Card2';
import Card3 from '../Card3';


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent : 'left',
        alignItems: 'center',
        marginLeft:140,
        marginTop:-166,
        marginBottom: 0,
    },
}));
export default function () {
    const classes = useStyles();
    return <div className={classes.root}>
        <div>
       <Card1/>
        </div>

        <div>
        <Card2/>
        </div>
       <div>
       <Card3/>
        <Card3/>      
        </div>

    </div>;
}