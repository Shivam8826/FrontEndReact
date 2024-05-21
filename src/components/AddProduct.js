import React, { Component } from 'react';


import { makeStyles } from '@material-ui/core/styles';
import { CardContent, Card, Grid, TextField, Typography, Button,Select, Container } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({

    root2:{
        minHeight: '200vh',
  backgroundImage: `url(${process.env.PUBLIC_URL + '/Images/BG8.png'})`,
  backgroundRepeat: 'no-repeat',
//   backgroundSize:'cover',
    },

//     root:{
//         minHeight: '100vh',
//   backgroundImage: `url(${process.env.PUBLIC_URL + '/Images/logo.png'})`,
//   backgroundRepeat: 'no-repeat',
//   marginTop:100,
  
//     },
    roottitle:{
        color:"#2d71d6",
    },
    form1:{
       
      
        marginLeft:700,
        marginTop:60,
       

    },
    form2: {
       
        marginLeft:100,
        marginTop: 300,
    },
  }));
  export default function AddProduct() {
    const classes = useStyles();
        return (

            <div className={classes.root2} >
                
                 <Container  >
                 
                <Card className={classes.form1} style= {{maxWidth:450, padding:"5px 1px",background: "#e8f4fd"}}>
                    <CardContent>
                      

                    <Typography   gutterbottom variant= "h3"  color="primary" align="center" 
                >
                    <font face = "Comic Sans MS">
            
                     Add Product
                     </font>
                     </Typography>
                         <form >
                         <Grid container spacing ={1} >


                         <Grid xs={12}  item>

<h3> <font color="blue" font face="Comic Sans MS"> Choose Your Category</font></h3>

<Select  label ="Category"  placeholder="Select Category" variant="outlined" fullWidth >
            
       
             <option  defaultValue="Select Category"  placeholder="SelectCategory"></option> 
                <option value="television">Television</option>
                <option value="mobile">Mobile</option>
                <option value="air conditioner">Air Conditioner</option>
              </Select>
                 </Grid>
                      

                     <Grid xs={12}  item>
                       <TextField label="Product Name" placeholder="Enter Product Name" variant="outlined" fullWidth/>
                     </Grid>
                   
                     <Grid xs={12} item>
                         <TextField label="Product Model" placeholder=" Enter Product Model" variant="outlined" fullWidth borderColor="primary"/>
                     </Grid>


                         <Grid xs={12}  item>
                        
                         <input type="number" label="Price" variant ="outlined"  step="0.01" autoComplete="off" 
                                       placeholder ="Enter the  Product Price"  fullWidth
                                       style ={{maxWidth:250, margin:"2 auto", padding:"16px 205px" , fontSize: 16,background: "#e8f4fd"}}/>
                        
                    </Grid> 

                     <Grid xs={12}  item>
                         <TextField label="Specification" multiline rows = {4} placeholder="Enter Specification" variant="outlined" fullWidth/>
                     </Grid>
                    
                    
       
                     <Grid xs={12}  item>
                         <Button variant="contained" color="primary" fullWidth>  <font face = "Comic Sans MS">Submit </font> </Button>
                      </Grid>
                         </Grid>
                         
                         </form>
                        
                      
  
                    </CardContent>
                </Card>
             
                </Container>
               
                
            </div>

           
        );
    }