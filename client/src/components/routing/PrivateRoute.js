import React, { useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import { Navigate } from 'react-router-dom';
import Spinner from '../layout/Spinner';

const PrivateRoute = ({ component: Component }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) return <Spinner />;
  if (isAuthenticated) return <Component />;
  return <Navigate to='/login' />;
};

export default PrivateRoute;
