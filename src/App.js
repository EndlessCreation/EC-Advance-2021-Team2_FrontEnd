import { Route, Switch } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import './App.css';
import FindIdPage from './pages/FindIdPage';
import FindPasswordPage from './pages/FindPasswordPage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import GridViewPage from './pages/postview/GridViewPage';
import SignupPage from './pages/SignupPage';
import KeywordPage from './pages/KeywordPage';
import TIMPage from './pages/TIMPage';
import theme from './styles/theme';
import MyPage from './pages/MyPage';
import My404Page from './pages/My404Page';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fafcf9;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Switch>
        <Route component={MainPage} path="/" exact />
        <Route component={LoginPage} path="/login" />
        <Route component={KeywordPage} path="/keyword/:tagId/:keywordId" />
        <Route component={TIMPage} path="/tim/:tagId/:keywordId" />
        <Route component={SignupPage} path="/signup" />
        <Route component={FindIdPage} path="/findId" />
        <Route component={FindPasswordPage} path="/findPassword" />
        <Route component={GridViewPage} path="/tag" />
        <Route component={MyPage} path="/mypage" />
        <Route path="*" exact={true} component={My404Page} />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
