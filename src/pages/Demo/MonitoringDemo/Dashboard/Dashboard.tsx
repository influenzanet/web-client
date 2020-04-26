import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { VegaLite } from 'react-vega';
import map from './map.svg';

import cases from './cases.svg';
import symptoms from './symptoms.svg';
import survey from './surveys.svg';

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
            <Paper className={classes.paper}><b>Map of Participants</b></Paper>
			<Paper><Box p={2}>
            <img src={map} alt="Participants Map" width="100%" />
			</Box></Paper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper><Box p={2}>
              <img src={survey} alt="Participants Map" width="100%" />
            </Box></Paper>

            <Box p={2}></Box>
            <Typography variant="h6">
              Overview
            </Typography>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableRow>
                  <TableCell>Surveys last week</TableCell>
                  <TableCell align="right">4937</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Total Surveys</TableCell>
                  <TableCell align="right">26355</TableCell>
                </TableRow>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper>
              <Box p={2}>
                <img src={cases} alt="Cases" width="100%" />
              </Box>
            </Paper>

          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper>
              <Box p={2}>
                <img src={symptoms} alt="Participants Map" width="100%" />
              </Box>
            </Paper>
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
