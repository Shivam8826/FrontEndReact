import React from 'react';
import { makeStyles } from '@material-ui/core';
import Card4 from '../Card4';
import CreateCard from '../CreateCard';
import HeadingNews from '../HeadingNews';
import CardFeatured from '../CardFeatured';



const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent : 'left',
        alignItems: 'center',
        marginTop:-160,
        marginLeft:140,
        
    },
    head:{
        
        marginLeft:10,
    }
}));
export default function () {
    const classes = useStyles();
    return <div className={classes.root}>
            <div>
            <CardFeatured/>
                </div>
    </div>;
}