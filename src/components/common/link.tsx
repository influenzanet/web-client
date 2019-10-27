import React from 'react';
import {  Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

// The use of React.forwardRef will no longer be required for react-router-dom v6.
// See https://github.com/ReactTraining/react-router/issues/6056
export const LinkRef = React.forwardRef<HTMLAnchorElement, RouterLinkProps>((props, ref) => (
    <RouterLink innerRef={ref} {...props} />
  ));
