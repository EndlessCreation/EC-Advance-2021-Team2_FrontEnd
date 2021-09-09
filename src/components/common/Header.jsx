import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.header`
  /* position: fixed; */
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  width: 100%;
  height: 4rem;
  justify-content: space-around;
  align-items: center;
`;

const Header = ({ user, onLogout }) => {
  return (
    <Wrapper>
      <h1>Logo</h1>
      <div>
        {user ? (
          <button onClick={onLogout}>로그아웃</button>
        ) : (
          <div>
            <Link to="/login">로그인</Link>
            <Link to="/signup">회원가입</Link>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Header;
