import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AuthForm.module.css';

const textMap = {
  login: '로그인',
  signup: '회원가입',
};

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = textMap[type];

  return (
    <div className={styles.wrapper}>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <div>
          <input
            name="email"
            placeholder="email"
            type="email"
            onChange={onChange}
            value={form.email}
          />
          <button>check</button>
        </div>
        <input
          name="password"
          placeholder="password"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {type === 'signup' && (
          <div className={styles.signupWrapper}>
            <input
              name="passwordConfirm"
              placeholder="passwordConfirm"
              type="password"
              onChange={onChange}
              value={form.passwordConfirm}
            />
            <input
              name="name"
              placeholder="name"
              type="text"
              onChange={onChange}
              value={form.name}
            />
            <div>
              <input
                name="account"
                placeholder="account"
                type="text"
                onChange={onChange}
                value={form.account}
              />
              <button>Check</button>
            </div>
            <div>
              <input
                name="nickname"
                placeholder="nickname"
                type="text"
                onChange={onChange}
                value={form.nickname}
              />
              <button>Check</button>
            </div>
            <input
              name="birth"
              placeholder="birth"
              type="text"
              onChange={onChange}
              value={form.birth}
            />
          </div>
        )}
        {error && <p>{error}</p>}
        <button>{text}</button>
      </form>
      <footer>
        {type === 'login' ? (
          <Link to="/signup">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </footer>
    </div>
  );
};

export default AuthForm;
