import React, { useState } from 'react';

import {
    Drawer as MDrawer,
    Button,
    AppBar,
    Toolbar,
    Box,
    Grid,
    List,
    Divider,
    ListItem,
    ListItemText
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import styles from './Drawer.module.scss';
import logo from '../../../assets/images/Influenzanet_Logoinsgesamt_RGB.png';

type DrawerSide = 'top' | 'left' | 'bottom' | 'right';

type DrawerProps = {
    side: DrawerSide,
}


const useStyles = makeStyles(theme => ({
    drawerContent: {
        padding: theme.spacing(1, 2),
    },
    currentRoute: {
        color: theme.palette.secondary.main,
    }
}));

export const Drawer: React.FC<DrawerProps> = (props) => {
    const classes = useStyles();

    const [state, setState] = useState({
        open: true,
    });

    const toggleDrawer = (open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        console.log('close drawer - call action');
        setState(oldState => ({
            ...oldState,
            open,
        }));
    };

    return (
        <MDrawer
            classes={{ paper: styles.drawer }}
            open={state.open}
            anchor={props.side}
            onClose={toggleDrawer(false)}
        >
            <AppBar position="static" className={styles.drawerAppbar} elevation={0}>
                <Toolbar>
                    <img src={logo} alt="logo" className={styles.drawerLogo} />
                </Toolbar>
            </AppBar>
            <Box className={styles.drawerContent + ' ' + classes.drawerContent}
                display="flex"
                flexDirection="column"
            >
                <List>
                    <ListItem button key={'Home'} className={classes.currentRoute}>
                        <ListItemText primary={'Home'} />
                    </ListItem>
                    <ListItem button key={'Explore'}>
                        <ListItemText primary={'Explore'} />
                    </ListItem>
                    <ListItem button key={'My Studies'}>
                        <ListItemText primary={'My Studies'} />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button key={'Coverage Map'}>
                        <ListItemText primary={'Coverage Map'} />
                    </ListItem>
                    <ListItem button key={'Devices'}>
                        <ListItemText primary={'Devices'} />
                    </ListItem>
                    <ListItem button key={'News'}>
                        <ListItemText color="secondary" primary={'News'} />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button key={'Profile'}>
                        <ListItemText primary={'Profile'} />
                    </ListItem>
                    <ListItem button key={'History'} disabled>
                        <ListItemText primary={'History'} />
                    </ListItem>
                    <ListItem button key={'Settings'} disabled>
                        <ListItemText  primary={'Settings'} />
                    </ListItem>
                </List>


                <Box flexGrow={1}></Box>
                <Grid container direction="column" alignItems="center">
                    <Grid item xs={12}>
                        <Button
                            className={styles.drawerBtn}
                            variant="outlined" color="secondary">
                            Logout</Button>
                    </Grid>
                </Grid>
            </Box>

        </MDrawer>
    );
}


export default Drawer;


