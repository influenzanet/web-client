import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { VegaLite } from 'react-vega';
import map from './map.svg';

import source1 from './source (1).svg';
import source2 from './source (2).svg';
import source3 from './source (3).svg';
import source4 from './source (4).svg';
import source5 from './source (5).svg';
import source6 from './source (6).svg';
import source7 from './source (7).svg';
import source8 from './source (8).svg';
import source9 from './source (9).svg';
import source10 from './source (10).svg';
import source11 from './source (11).svg';


import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Typography, Box } from '@material-ui/core';




const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3),
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.primary,
    },
    table: {
      color: theme.palette.text.primary,
      bottom: "30px",
      minWidth: 50,
    },
  }),
);

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Paper><Box p={2}>
            <img src={source1} alt="Participants Map" width="100%" />
			</Box></Paper>
          </Grid>
		  
		   <Grid item xs={12} sm={6}>
            <Paper><Box p={2}>
            <img src={source2} alt="Participants Map" width="100%" />
			</Box></Paper>
          </Grid>
		  
		   <Grid item xs={12} sm={6}>
            <Paper><Box p={2}>
            <img src={source4} alt="Participants Map" width="100%" />
			</Box></Paper>
          </Grid>
		  
		   <Grid item xs={12} sm={6}>
            <Paper><Box p={2}>
            <img src={source5} alt="Participants Map" width="100%" />
			</Box></Paper>
          </Grid>
		  
		   <Grid item xs={12}>
            <Paper><Box p={2}>
            <img src={source3} alt="Participants Map" width="100%" />
			</Box></Paper>
          </Grid>
		  
		   <Grid item xs={12} sm={6}>
            <Paper><Box p={2}>
            <img src={source6} alt="Participants Map" width="100%" />
			</Box></Paper>
          </Grid>
		  
		  
		   <Grid item xs={12} sm={6}>
            <Paper><Box p={2}>
            <img src={source7} alt="Participants Map" width="100%" />
			</Box></Paper>
          </Grid>
		  
		   <Grid item xs={12} >
            <Paper><Box p={2}>
            <img src={source8} alt="Participants Map" width="100%" />
			</Box></Paper>
          </Grid>
		  
		   <Grid item xs={12} >
            <Paper><Box p={2}>
            <img src={source10} alt="Participants Map" width="100%" />
			</Box></Paper>
          </Grid>
		  
		   <Grid item xs={12} sm={6}>
            <Paper><Box p={2}>
            <img src={source9} alt="Participants Map" width="100%" />
			</Box></Paper>
          </Grid>
		  
		   <Grid item xs={12} sm={6}>
            <Paper><Box p={2}>
            <img src={source11} alt="Participants Map" width="100%" />
			</Box></Paper>
          </Grid>
		  
		  
		  </Grid>

          
      
      </div>

      <div >



      </div>

      <div>





      </div>

    </div>

  );
};

export default Dashboard;
