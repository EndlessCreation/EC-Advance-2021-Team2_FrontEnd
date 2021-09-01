import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './AuthForm.module.css';

const DuplicateError = ({ error, value, click }) => {
  if (!click) return null;
  if (!value) return null; // 값이 없거나, 클릭아 안됬을 때
  return (
    <span>{error === false ? '이미 사용중 입니다.' : '사용 가능합니다.'}</span>
  );
};

const SignupComponent = ({
  form,
  emailChecked,
  nicknameChecked,
  accountChecked,
  onChange,
  onSubmit,
  onCheckEmail,
  onCheckNickname,
  onCheckAccount,
  error,
}) => {
  const [emailClick, setEmailClick] = useState(false);
  const [accoutClick, setAccoutClick] = useState(false);
  const [nicknameClick, setNicknameClick] = useState(false);

  useEffect(() => {
    if (form.email === '') {
      setEmailClick(false);
    }
  }, [form.email]);
  useEffect(() => {
    if (form.account === '') {
      setAccoutClick(false);
    }
  }, [form.account]);
  useEffect(() => {
    if (form.nickname === '') {
      setNicknameClick(false);
    }
  }, [form.nickname]);

  const handleCheckEmail = (e) => {
    e.preventDefault();
    if (form.email === '') {
      return;
    }
    onCheckEmail(e);
    setEmailClick(true);
  };
  const handleCheckAccount = (e) => {
    e.preventDefault();
    if (form.account === '') {
      return;
    }
    onCheckAccount(e);
    setAccoutClick(true);
  };
  const handleCheckNickname = (e) => {
    e.preventDefault();
    if (form.nickname === '') {
      return;
    }
    onCheckNickname(e);
    setNicknameClick(true);
  };
  return (
    <div className={styles.wrapper}>
      <h3>Sign Up</h3>
      <form onSubmit={onSubmit}>
        <input
          name="name"
          placeholder="name"
          type="text"
          onChange={onChange}
          value={form.name}
        />
        <div>
          <input
            name="email"
            placeholder="example@domain.com"
            type="email"
            onChange={onChange}
            value={form.email}
          />
          <button onClick={handleCheckEmail}>check</button>
          <DuplicateError
            error={emailChecked}
            value={form.email}
            click={emailClick}
          />
        </div>
        <div>
          <input
            name="account"
            placeholder="account"
            type="text"
            onChange={onChange}
            value={form.account}
          />
          <button onClick={handleCheckAccount}>Check</button>
          <DuplicateError
            error={accountChecked}
            value={form.account}
            click={accoutClick}
          />
        </div>
        <input
          name="password"
          placeholder="password"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        <input
          name="passwordConfirm"
          placeholder="passwordConfirm"
          type="password"
          onChange={onChange}
          value={form.passwordConfirm}
        />
        <div>
          <input
            name="nickname"
            placeholder="nickname"
            type="text"
            onChange={onChange}
            value={form.nickname}
          />
          <button onClick={handleCheckNickname}>Check</button>
          <DuplicateError
            error={nicknameChecked}
            value={form.nickname}
            click={nicknameClick}
          />
        </div>
        <input
          name="phone_number"
          placeholder="ex) 01012345678"
          type="text"
          onChange={onChange}
          value={form.phone_number}
        />
        <hr />
        <button>Sign Up</button>
      </form>
      {error && <span>{error}</span>}
      <footer>
        <Link to="/login">로그인</Link>
      </footer>
    </div>
  );
};

export default SignupComponent;
