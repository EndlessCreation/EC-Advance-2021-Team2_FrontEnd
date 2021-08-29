import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

const App = () => {
  return (
    <>
      <Route component={HomePage} path='/' exact />
      <Route component={LoginPage} path='/login' />
      <Route component={SignupPage} path='/signup' />
    </>
  )
}

export default App;
