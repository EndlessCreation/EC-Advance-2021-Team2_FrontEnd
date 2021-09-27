import React from 'react';
import StatusComponent from '../../components/status/StatusComponent';

const StatusContainer = ({ children }) => {
  const dummyData = 'log';
  return (
    <>
      <div style={{ position: 'fixed', top: '100px' }}>
        <StatusComponent title={dummyData}>{children}</StatusComponent>
      </div>
    </>
  );
};

export default StatusContainer;
