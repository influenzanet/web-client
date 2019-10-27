import React from 'react';

import NavBar from './Navigation/NavBar/NavBar';
import Drawer from './Navigation/Drawer/Drawer';

export const Home: React.FC = () => {
    return (
        <React.Fragment>
            <NavBar />
            <Drawer side="left"></Drawer>
        </React.Fragment>
    )
}


export default Home;


