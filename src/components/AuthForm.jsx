import React from 'react';
import { Link } from 'react-router-dom';

const textMap = {
  login: '로그인',
  signup: '회원가입',
};

const AuthForm = ({ type }) => {
  const text = textMap[type];

  return (
    <div>
      <h3>{text}</h3>
      <form>
        <input name="email" placeholder="email" type="email" />
        <input name="password" placeholder="password" type="password" />
        {type === 'signup' && (
          <input
            name="passwordConfirm"
            placeholder="check password"
            type="password"
          />
        )}
        <button>{text}</button>
      </form>
      <footer>
        {type === 'login' ? (
          <Link to="/signup">회원가입</Link>
        ) : (
          <Link to="/">로그인</Link>
        )}
      </footer>
    </div>
  );
};

export default AuthForm;
