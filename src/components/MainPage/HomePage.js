import React from 'react';

import { CssBaseline, makeStyles } from '@material-ui/core';
import Dashboard from '../Dashboard';
import Place1 from '../Places/Place1';
import Place3 from '../Places/Place3';
import Place2 from '../Places/Place2';
import Place4 from '../Places/Place4';
import HeadingNews from '../HeadingNews';
import HeadingNews2 from '../HeadingNews2';
import Navbar from '../Navbar/Navbar';





const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/Images/BG2.jpg'})`,
    backgroundRepeat: 'no-repeat',
    
  },
}));
export default function HomePage() {
  const classes = useStyles();
  return ( 
     <div className={classes.root}>
       
        <Dashboard/>
        <Place1/>
        <HeadingNews/>
        <Place2/>
        <HeadingNews2/>
        <Place3/>
        <Place4/>  
<CssBaseline/>


    </div>
  );
}

