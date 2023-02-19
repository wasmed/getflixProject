import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Signup from './components/Signup';
import ListClients from './components/ListClients';
import Login from './components/Login';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (

    <div>
      <Router>
           
          <div className="container ">
            <Routes>
              <Route path='/'  element={ <ListClients/>} ></Route>
              <Route path='/clients' element={ <ListClients/>} ></Route>
              <Route path='/add-client' element={<Signup/>} ></Route>
              <Route path='/login-client' element={<Login/>} ></Route>
            </Routes>
          </div>
      
      </Router>
    </div>
  );
}

export default App;
