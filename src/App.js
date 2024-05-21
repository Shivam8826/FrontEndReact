import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { CssBaseline, makeStyles } from '@material-ui/core';
import Login from './components/Login';
import SignUp from './components/SignUp';
import CreateReview from './components/CreateReview';
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import SellerList from './components/SellerList';
import ViewSellerList from './components/ViewSellerList';
import HomePage from './components/MainPage/HomePage';
import CompareProduct from './components/CompareProduct';
import AddProduct from './components/AddProduct';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/Images/BG2.jpg'})`,
    backgroundRepeat: 'no-repeat',
    
  },
  
}));
export default function App() {
  const classes = useStyles();
  return ( 
     <div className={classes.root}>
       <Router>
       <Navbar/>
       
       <Switch>
        <Route exact path="/"><HomePage/></Route>
        <Route exact path="/SignUp"><SignUp/></Route>
        <Route exact path="/Login"><Login/></Route>
        <Route exact path="/SellerList"><SellerList/></Route>
        <Route exact path="/ViewSellerList"><ViewSellerList/></Route>
        <Route exact path="/CreateReview"><CreateReview/></Route>
        <Route exact path="/CompareProduct"><CompareProduct/></Route>
        <Route exact path="/CreateProduct"><AddProduct/></Route>
        
        
        
      
<CssBaseline/>
</Switch>
</Router>
    </div>
  );
}

