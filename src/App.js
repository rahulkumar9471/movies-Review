import './App.css';
import Navbar from './components/user/Navbar'; 
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import EmailVerification from './components/auth/EmailVerification';
import ForgetPassword from './components/auth/ForgetPassword';
import ConfirmPassword from './components/auth/ConfirmPassword';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/auth/sign-in' element={<Signin />} />
          <Route path='/auth/sign-up' element={ <Signup />} />
          <Route path='/auth/verification' element={ <EmailVerification />} />
          <Route path='/auth/forget-password' element={ <ForgetPassword />} />
          <Route path='/auth/confirm-password' element={ <ConfirmPassword />} />
          <Route path='*' element={ <NotFound />} />
       </Routes>
    </>
  );
}

export default App;
