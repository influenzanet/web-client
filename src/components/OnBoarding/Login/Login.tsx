import React from 'react';
import { LinkRef } from '../../common/link';
import Button from '@material-ui/core/Button';

const Login: React.FC = () => {
    return (
        <div>
            <p>login</p>
            <Button variant="contained"
                color="secondary"
                component={LinkRef} to="/home"
            >
                Login
            </Button>
        </div>
    );
}

export default Login;
