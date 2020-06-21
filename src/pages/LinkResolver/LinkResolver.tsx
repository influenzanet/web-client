import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import ContactVerification from './ContactVerification/ContactVerification';
import { LinkResolverPaths } from '../../routes/linkResolver';
import { AuthPagesPaths } from '../../routes';
import PasswordReset from './ContactVerification/PasswordReset';


const LinkResolver: React.FC = () => {
  return (
    <Switch>
      <Route path={LinkResolverPaths.ContactVerification} component={ContactVerification} />
      <Route path={LinkResolverPaths.PasswordReset} component={PasswordReset} />
      {/* todo: unsubscribe */}
      <Redirect to={AuthPagesPaths.Login}></Redirect>
    </Switch>
  );
};

export default LinkResolver;
