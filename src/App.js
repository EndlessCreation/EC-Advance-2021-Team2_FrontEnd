import { Route } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import './App.css';
import FindIdPage from './pages/FindIdPage';
import FindPasswordPage from './pages/FindPasswordPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import GridViewPage from './pages/postview/GridViewPage';
import SignupPage from './pages/SignupPage';
import theme from './styles/theme';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fafcf9;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Route component={HomePage} path="/" exact />
      <Route component={LoginPage} path="/login" />
      <Route component={SignupPage} path="/signup" />
      <Route component={FindIdPage} path="/findId" />
      <Route component={FindPasswordPage} path="/findPassword" />
      <Route component={GridViewPage} path="/gridview" />
    </ThemeProvider>
  );
};

export default App;
