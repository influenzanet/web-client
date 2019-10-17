import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const NavBar: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>

            <Typography variant="h6" className={classes.title}>
            <Link to={"/info"}>Influenzanet</Link>
                {/*<img className={classes.title} src={logo} alt="logo" style={{width: "150px"}}/>*/}
            </Typography>
            {/*
            <Button color="inherit">Login</Button>
            <Button color="inherit">Signup</Button>
            */}
            <Button color="inherit"><Link to={"/login"}>Login</Link></Button>
            <Button color="inherit"><Link to={"/signup"}>Signup</Link></Button>
          
          
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default NavBar;


