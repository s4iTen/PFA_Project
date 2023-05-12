import Card from './components/Card';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Main from './Pages/Main';
function App() {
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />}/>
        <Route path="/SignUp" element={<SignUp />}/>
        <Route path="/" element={<Main />}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
