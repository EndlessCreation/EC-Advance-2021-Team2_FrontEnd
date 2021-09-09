import { Route } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
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
      <Route component={HomePage} path='/' exact />
      <Route component={LoginPage} path='/login' />
      <Route component={SignupPage} path='/signup' />
    </ThemeProvider>
  )
}

export default App;
