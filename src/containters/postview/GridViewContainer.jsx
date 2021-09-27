import React from 'react';
import { useSelector } from 'react-redux';
import GridView from '../../components/postview/GridView';

const GridViewContainer = () => {
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));
  return <GridView user={user} />;
};

export default GridViewContainer;
