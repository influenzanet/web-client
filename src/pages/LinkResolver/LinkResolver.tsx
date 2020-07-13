import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import ContactVerification from './Resolvers/ContactVerification';
import { LinkResolverPaths } from '../../routes/linkResolver';
import { AuthPagesPaths } from '../../routes';
import PasswordReset from './Resolvers/PasswordReset';
import StudyLogin from './Resolvers/StudyLogin';


const LinkResolver: React.FC = () => {
  return (
    <Switch>
      <Route path={LinkResolverPaths.ContactVerification} component={ContactVerification} />
      <Route path={LinkResolverPaths.PasswordReset} component={PasswordReset} />
      <Route path={LinkResolverPaths.StudyLogin} component={StudyLogin} />
      {/* todo: unsubscribe */}
      <Redirect to={AuthPagesPaths.Login}></Redirect>
    </Switch>
  );
};

export default LinkResolver;
