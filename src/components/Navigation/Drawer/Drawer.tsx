import React, { useState } from 'react';

import {
    Drawer as MDrawer, Button, AppBar, Toolbar, Box
} from '@material-ui/core';
import { sizing } from '@material-ui/system';

import styles from './Drawer.module.scss';
import logo from '../../../assets/images/Influenzanet_Logoinsgesamt_RGB.png';

type DrawerSide = 'top' | 'left' | 'bottom' | 'right';

type DrawerProps = {
    side: DrawerSide,
}

export const Drawer: React.FC<DrawerProps> = (props) => {
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
            <div className={styles.drawerContent}>
                <p>test</p>

                <Button variant="outlined" color="secondary">Logout</Button>
            </div>

        </MDrawer>
    );
}


export default Drawer;


