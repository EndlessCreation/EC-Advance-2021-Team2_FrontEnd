import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AuthForm.module.css';

const LoginComponent = ({ form, onChange, onSubmit, onLoggout, error }) => {
  return (
    <div className={styles.wrapper}>
      <h3>Login</h3>
      <form onSubmit={onSubmit}>
        <input
          name="account"
          placeholder="account"
          type="text"
          onChange={onChange}
          value={form.account}
        />
        <input
          name="password"
          placeholder="password"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        <button>Login</button>
      </form>
      {error && <span>{error}</span>}
      <footer>
        <Link to="/signup">회원가입</Link>
      </footer>
    </div>
  );
};

export default LoginComponent;
