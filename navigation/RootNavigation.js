import React from 'react';
import {useSelector} from 'react-redux';
import {Authenticated, NonAuthenticated} from './MainNavigation';

const RootNAvigation = () => {
  const user = useSelector(state => state.user);
  return user.isLoggedIn ? <Authenticated /> : <NonAuthenticated />;
};

export default RootNAvigation;
