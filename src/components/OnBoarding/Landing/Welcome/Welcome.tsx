import React from 'react';

import logo from '../../../../assets/images/Influenzanet_Logoinsgesamt_RGB.png'; //assets/images/Influenzanet_Logoinsgesamt_RGB.png';

import {
    Typography,
    Button,
    Grid,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { LinkRef } from '../../../common/link';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            padding: theme.spacing(12, 3),
        },
        button: {
            margin: theme.spacing(1),
            width: "200px",
        },
    }),
);

const Welcome: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Grid container justify="center">
                        <Typography variant="h4" gutterBottom>
                            Welcome to
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify="center">
                        <img src={logo} alt="logo" style={{ maxHeight: "120px", maxWidth: "95vw", marginBottom: "40px" }} />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify="center">
                        <Button variant="contained"
                            color="primary"
                            className={classes.button}
                            component={LinkRef} to="/start/signup"
                        >
                            Create New Account
                        </Button>
                        <Button variant="contained"
                            color="secondary"
                            className={classes.button}
                            component={LinkRef} to="/start/login"
                        >
                            Sign In
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Welcome;