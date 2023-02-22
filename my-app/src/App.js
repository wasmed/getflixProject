import logo from './logo.svg';
import './App.scss';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import SigninForm from './components/SigninForm';
import SignupForm from './components/SignupForm';
import Abonnement from './components/Abonnement';
import UserPage from './components/UserPage';
import Payment from './components/payment';
import ForgotPassword from './components/ForgotPassword';


function App() {
  return (
<Router>
    <div>
             
            <Routes>
              <Route exact path='/'  element={ <Home/> } >
                  
              </Route>
              
              <Route path='/login' element={ <SigninForm />} ></Route>
              <Route path='/signup' element={<SignupForm />} ></Route>
              <Route path='/abonnement' element={<Abonnement/>} ></Route>
              <Route path='/userPage' element={<UserPage/>} ></Route>
              <Route path='/paiement' element={<Payment/>} ></Route>
              <Route path='/forgetPassword' element={<ForgotPassword />} ></Route>
            
          
      
    </Routes>
    
    </div>

   
</Router>


  );
}

export default App;
