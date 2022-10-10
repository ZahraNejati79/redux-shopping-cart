import { useEffect, useState } from "react";
import { connect } from "react-redux";
import CartItem from "../Components/CartItem";

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  useEffect(() => {
    let items = 0;
    let price = 0;
    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });
    setTotalItem(items);
    setTotalPrice(price);
  }, [cart, totalItem, totalPrice, setTotalItem, setTotalPrice]);
  return (
    <div className="flex items-start justify-center gap-x-8 mt-8">
      <div className="flex flex-col items-center justify-center gap-4">
        {cart.map((item) => (
          <CartItem product={item} />
        ))}
      </div>
      <div className="shadow-xl rounded-lg flex flex-col items-center justify-center gap-y-8 mx-12">
        <h2 className="font-bold mt-8">صورت حساب</h2>
        <div className="flex items-center justify-between w-60 p-8 ">
          <div>{totalPrice} $</div>
          <div>:جمع کل ({totalItem} آیتم)</div>
        </div>
        <button className="bg-red-200 rounded-lg hover:shadow-xl px-16 py-2 mb-4">
          پرداخت
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
