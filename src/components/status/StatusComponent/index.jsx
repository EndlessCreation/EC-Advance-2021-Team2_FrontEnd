import React from 'react';
import StatusTab from './StatusTab';
import StatusWrapper from './StatusWrapper';

const StatusComponent = ({ title, children }) => {
  console.log(children);
  return (
    <>
      <StatusWrapper>
        <StatusTab title={title} />
        {children}
      </StatusWrapper>
    </>
  );
};
export default StatusComponent;
