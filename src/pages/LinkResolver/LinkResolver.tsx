import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import ContactVerification from './ContactVerification/ContactVerification';
import { LinkResolverPaths } from '../../routes/linkResolver';
import { AuthPagesPaths } from '../../routes';


const LinkResolver: React.FC = () => {
  return (
    <Switch>
      <Route path={LinkResolverPaths.ContactVerification} component={ContactVerification} />
      {/* todo: unsubscribe */}
      {/* todo: password reset form */}
      <Redirect to={AuthPagesPaths.Login}></Redirect>
    </Switch>
  );
};

export default LinkResolver;
