import React from 'react';
import { Link } from 'react-router-dom';

const HomeComponent = () => {
  return (
    <div>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default HomeComponent;
