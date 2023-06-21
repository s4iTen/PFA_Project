import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Main from './Pages/Main';
import Design from './Pages/Design';
import MyShoes from './Pages/MyShoes';
import ProductDetails from './components/ProductDetails';
import Product from './components/Product';
import Shoe3D from './Pages/Shoe3D';
import Cart from "./components/Cart";
import { StateContextProvider } from "./context/StateContext";

function App() {
  return (
    <BrowserRouter>
      <StateContextProvider>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/" element={<Main />} />
          <Route path="/Design" element={<Design />} />
          <Route path="/MyShoes" element={<MyShoes />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route exact path="/Shoe3D" element={<Shoe3D />} />
          <Route exact path="/Cart" element={<Cart />} />
        </Routes>
      </StateContextProvider>
    </BrowserRouter>
  );
}

export default App;
