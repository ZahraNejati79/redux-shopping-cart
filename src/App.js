import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Cart from "./Pages/Cart";
import Products from "./Pages/Products";
import SingleItem from "./Pages/SingleItem";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<SingleItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
