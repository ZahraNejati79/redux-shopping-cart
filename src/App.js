import { connect } from "react-redux";
import { BrowserRouter, redirect, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Cart from "./Pages/Cart";
import Products from "./Pages/Products";
import SingleItem from "./Pages/SingleItem";

function App({ currentItem }) {
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

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
