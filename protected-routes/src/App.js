
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Settings from './Pages/Settings';
import Navbar from './Components/Navbar';
import { Provider } from 'react-redux';
import Store from './Store/Store';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <>
    <Provider store={Store}>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route element={<PrivateRoute/>}>
      <Route path='/settings' element={<Settings/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
