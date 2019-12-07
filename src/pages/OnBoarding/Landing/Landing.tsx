import React from 'react';

import Welcome from './Welcome/Welcome';
import Infos from './Infos/Infos';
import CssBaseline from '@material-ui/core/CssBaseline';


const Landing: React.FC = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Welcome></Welcome>
            <Infos></Infos>
        </React.Fragment>
    );
}

export default Landing;
