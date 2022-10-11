import { useState } from "react";
import { connect } from "react-redux";
import { removeFromCart, adjustQty } from "../Redux/Shopping/Shopping-action";
const CartItem = ({ product, removeFromCart, adjustQty }) => {
  const [input, setInput] = useState(product.qty);
  const changeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(product.id, input);
  };
  return (
    <div className="flex items-center justify-between bg-red-200 gap-x-8 min-w-full">
      <div className="h-40 w-40 bg-slate-500"></div>
      <div className="flex flex-col gap-y-2">
        <div>{product.title}</div>
        <div>{product.description}</div>
        <div>{product.price}</div>
      </div>
      <div className="flex flex-col gap-y-12 mr-2">
        <input
          onChange={changeHandler}
          value={input}
          min={1}
          type="number"
          className="w-12 h-8"
        ></input>
        <button onClick={() => removeFromCart(product.id)}>delete</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
