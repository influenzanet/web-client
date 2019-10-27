import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            padding: theme.spacing(3),
            backgroundColor: "white",
        },
        cardSection: {
            padding: theme.spacing(6, 2),
        },
        card: {
            padding: theme.spacing(2, 1),
            textAlign: "center",
        }
    }),
);

const Infos: React.FC = () => {
    const classes = useStyles();

    return (
        <div>

            <Grid className={classes.root} container spacing={3}>
                <Grid item xs={12}>
                    <Grid container justify="flex-start" spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h4" gutterBottom>
                                What is Influenzanet?
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box>
                                <Skeleton></Skeleton>
                                <Skeleton></Skeleton>
                                <Skeleton></Skeleton>
                            </Box>
                            <Box mt={8}>
                                <Skeleton></Skeleton>
                                <Skeleton></Skeleton>
                                <Skeleton></Skeleton>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Skeleton variant="rect" height="220px"></Skeleton>
                            <Skeleton></Skeleton>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>

            <Grid container spacing={3} justify="center" className={classes.cardSection} >
                <Grid item xs={12} sm={3}>
                    <Paper className={classes.card}>
                        <Skeleton style={{ margin: "auto" }} variant="circle" height="150px" width="150px"></Skeleton>
                        <Skeleton></Skeleton>
                        <Skeleton></Skeleton>
                        <Skeleton></Skeleton>
                        <Skeleton></Skeleton>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Paper className={classes.card}>
                        <Skeleton style={{ margin: "auto" }} variant="circle" height="150px" width="150px"></Skeleton>
                        <Skeleton></Skeleton>
                        <Skeleton></Skeleton>
                        <Skeleton></Skeleton>
                        <Skeleton></Skeleton>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Paper className={classes.card}>
                        <Skeleton style={{ margin: "auto" }} variant="circle" height="150px" width="150px"></Skeleton>
                        <Skeleton></Skeleton>
                        <Skeleton></Skeleton>
                        <Skeleton></Skeleton>
                        <Skeleton></Skeleton>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Infos;