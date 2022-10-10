import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
const Nav = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });
    setCartCount(count);
  }, [cart, cartCount]);
  return (
    <header className="w-full h-16 shadow-2xl bg-white sticky top-0 container flex items-center justify-center">
      <nav className="flex justify-between md:max-w-6xl w-full px-4">
        <div className="flex items-center justify-center gap-x-2">
          <Link to="/cart">cart</Link>
          <div>{cartCount}</div>
        </div>
        <div>
          <Link to="/">home</Link>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Nav);
