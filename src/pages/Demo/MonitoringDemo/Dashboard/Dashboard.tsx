import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { VegaLite } from 'react-vega';
import map from './map.png';

import Users_temp from './Users.json';
import Surveys_temp from './Surveys.json';
import Account_temp from './Account.json';


const Users = JSON.stringify(Users_temp);
const Surveys = JSON.stringify(Surveys_temp);
const Account = JSON.stringify(Account_temp);



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
		<VegaLite className={classes.chart} spec={JSON.parse(Users)}/>
		<VegaLite className={classes.chart} spec={JSON.parse(Surveys)}/>
		<VegaLite className={classes.chart} spec={JSON.parse(Account)}/>
		
	
		</div>
		
    </div>

  );
};

export default Dashboard;
