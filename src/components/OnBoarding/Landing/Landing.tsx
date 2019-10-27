import React from 'react';

import logo from '../../../assets/images/Influenzanet_Logoinsgesamt_RGB.png';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import {
    Typography,
    Button,
    Grid,
    Box
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

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
