import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import PageviewOutlinedIcon from '@material-ui/icons/PageviewOutlined';

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    
  },

  
  menuButton: {
    marginRight: theme.spacing(-5),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:'rgba(146,216,246,85%)'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
     
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          
        </Toolbar>
  
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider style={{marginTop:'14.5px'}}/>
        <List>
          {[<ListItem button><Link to = "/SignUp">
            <font color="black" face="Comic Sans MS"><b>
            Products
            </b>
            </font>
          </Link>
          </ListItem>, 
          <ListItem button><Link to = "/SignUp">
          Product Reviews
        </Link>
        </ListItem>, 
          <ListItem button><Link to = "/ViewSellerList">
          View Sellers
        </Link>
        </ListItem>, 
          <ListItem button><Link to = "/SignUp">
          Feedback
        </Link>
        </ListItem>].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon> <PageviewOutlinedIcon/> </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[ <ListItem button><Link to = "/CreateProduct">
          Add Product
        </Link> </ListItem>
        ,<ListItem button><Link to = "/SellerList">
           Add Seller
          </Link>
          </ListItem>,
          <ListItem button><Link to = "/CreateReview">
            Review
          </Link>
          </ListItem>, 
          <ListItem button><Link to = "/CompareProduct">
          Compare Products
        </Link>
        </ListItem>].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon> <AddCircleOutlineOutlinedIcon /></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      
        
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        
       
      </main>
    </div>
  );
} 