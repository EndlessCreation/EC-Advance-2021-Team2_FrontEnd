import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.header`
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  width: 100%;
  height: 4rem;
  justify-content: space-around;
  align-items: center;
  & > nav {
    width: 60%;
    & > ul {
      display: flex;
      justify-content: space-around;
      list-style-type: none;
    }
  }
`;

const Header = ({ user, onLogout }) => {
  return (
    <Wrapper>
      <h1>Logo</h1>
      <nav>
        {user ? (
          <ul>
            <li>
              <Link to="/post">Tim</Link>
            </li>
            <li>
              <button onClick={onLogout}>로그아웃</button>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/login">로그인</Link>
            </li>
            <li>
              <Link to="/signup">회원가입</Link>
            </li>
          </ul>
        )}
      </nav>
    </Wrapper>
  );
};

export default Header;
