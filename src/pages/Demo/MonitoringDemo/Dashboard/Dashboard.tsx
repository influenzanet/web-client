import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { VegaLite } from 'react-vega';
import map from './map.png';

import Cases_temp from './ReportedCases.json';
import Symptoms_temp from './Symptoms.json';
import Surveys_temp from './Surveys.json';

const Cases = JSON.stringify(Cases_temp);
const Symptoms = JSON.stringify(Symptoms_temp);
const Surveys = JSON.stringify(Surveys_temp);



const useStyles = makeStyles(theme => ({
	map:{
		height: 500,
		padding: ' 30px',
	},
	chart:{
		padding: ' 30px',
	}
}));
	
const Dashboard = () => {
	const classes = useStyles();
  return (
    <div>
		<div >
		<img  className={classes.map} src={map} alt="Distribution of participants in Europe" />
		<ul>
			<li>Users online:</li>
			<li>Users total:</li>
			<li>Users this week:</li>
			</ul>
		</div>
		
		<div>
		<VegaLite className={classes.chart} spec={JSON.parse(Cases)}/>
		<VegaLite className={classes.chart} spec={JSON.parse(Symptoms)}/>
		<VegaLite className={classes.chart} spec={JSON.parse(Surveys)}/>
		
	
		</div>
		
    </div>

  );
};

export default Dashboard;
