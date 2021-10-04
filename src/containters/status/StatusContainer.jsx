import React, { useState } from 'react';
import Status from '../../components/Status';
import { useSelector } from 'react-redux';

const StatusContainer = ({ children }) => {
  const [state, setState] = useState(0);
  const { user } = useSelector(({ user }) => ({ user: user.user }));

  const onStateChange = (check) => {
    if (check === true) {
      if (state === 1) {
        return;
      }
      setState(state + 1);
    } else {
      if (state === 0) {
        return;
      }
      setState(state - 1);
    }
  };
  if (!user) return null;
  return <Status state={state} onStateChange={onStateChange}></Status>;
};

export default StatusContainer;
