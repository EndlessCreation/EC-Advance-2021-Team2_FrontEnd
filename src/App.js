import { Route } from 'react-router-dom';
import './App.css';
import FindIdPage from './pages/FindIdPage';
import FindPasswordPage from './pages/FindPasswordPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

const App = () => {
  return ( 
    <>
      <Route component={HomePage} path='/' exact />
      <Route component={LoginPage} path='/login' />
      <Route component={SignupPage} path='/signup' />
      <Route component={FindIdPage} path='/findId' />
      <Route component={FindPasswordPage} path='/findPassword' />
    
    </>
  )
}

export default App;
