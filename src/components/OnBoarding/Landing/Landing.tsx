import React from 'react';

import Welcome from './Welcome/Welcome';
import Infos from './Infos/Infos';


const Landing: React.FC = () => {
    return (
        <React.Fragment>
            <Welcome></Welcome>
            <Infos></Infos>
        </React.Fragment>
    );
}

export default Landing;
