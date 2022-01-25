import React, { useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (isAuthenticated) return <Component />;
  return <Navigate to='/login' />;
};

export default PrivateRoute;
