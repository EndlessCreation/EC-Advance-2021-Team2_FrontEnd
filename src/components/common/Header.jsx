import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { FaRegBell } from 'react-icons/fa';

const Header = ({ user, onLogout }) => {
  return (
    <StyledHeader>
      {user ? (
        <LoginWrapper>
          <StyledLink to="/">
            <AiOutlineUnorderedList size="30" />
          </StyledLink>
          <SearchInput type="text" />
          <NavWrapper>
            <ul>
              <li>
                <div>Profile</div>
              </li>
              <li>
                <LogoutButton onClick={onLogout}>로그아웃</LogoutButton>
              </li>
              <li>
                <FaRegBell size="30" />
              </li>
            </ul>
          </NavWrapper>
        </LoginWrapper>
      ) : (
        <LogoutWrapper>
          <StyledLink to="/">
            <h1>TIM</h1>
          </StyledLink>

          <NavWrapper>
            <ul>
              <li>Test</li>
              <li>Test</li>
              <li>Test</li>
              <li>Test</li>
            </ul>
            <Line></Line>
            <ul>
              <li>
                <StyledLink to="/login">로그인</StyledLink>
              </li>
              <li>
                <StyledLink to="/signup">회원가입</StyledLink>
              </li>
            </ul>
          </NavWrapper>
        </LogoutWrapper>
      )}
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
  /* box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2); */
  width: 100%;
  height: 60px;
  background: white;
`;
const LoginWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const SearchInput = styled.input`
  flex-grow: 0.5;
  height: 20px;
`;
const LogoutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  & > h1 {
    margin: 0;
  }
`;
const NavWrapper = styled.nav`
  display: flex;
  justify-content: left;
  align-items: center;
  & > ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    & > li {
      list-style-type: none;
      padding: 5px 10px;
      cursor: pointer;
      border-radius: 2px;
      &:hover {
        background-color: #e4e5e8;
        transition: background-color 200ms linear;
      }
    }
  }
`;
const Line = styled.div`
  width: 1px;
  background: rgba(0, 0, 0, 0.1);
  height: 20px;
  margin: 0 10px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
`;
const LogoutButton = styled.button`
  border: none;
  background: none;
`;

export default Header;
