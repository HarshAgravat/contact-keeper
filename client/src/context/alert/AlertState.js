import React, { useReducer } from 'react';
import { v4 as uuidV4 } from 'uuid';
import alertReducer from './alertReducer';
import AlertContext from './alertContext';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = (props) => {
  const initialState = [];
  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (msg, type, timeout = 5000) => {
    const id = uuidV4();
    dispatch({ type: SET_ALERT, payload: { id, msg, type } });
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };

  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert,
      }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
