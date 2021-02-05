import React from 'react';

const UserContext = React.createContext({
  user: {},
  setUser: () => {},
  isLoggedIn: false,
});

export default UserContext;
