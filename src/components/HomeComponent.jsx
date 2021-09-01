import React from 'react';
import { Link } from 'react-router-dom';

const HomeComponent = () => {
  return (
    <div>
      <h1>home</h1>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/Signup">Sign up</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomeComponent;
