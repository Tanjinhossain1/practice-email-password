import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componetns/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Register from './componetns/Register/Register';
import Home from './componetns/Home/Home';
import Login from './componetns/Login/Login';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
