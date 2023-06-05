import './App.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Main from './Pages/Main';
import Design from './Pages/Design';

function App() {
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />}/>
        <Route path="/SignUp" element={<SignUp />}/>
        <Route path="/" element={<Main />}/>
        <Route path="/Design" element={<Design />}/>


      </Routes>
      </BrowserRouter>
  );
}

export default App;
