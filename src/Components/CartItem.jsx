const CartItem = ({ product }) => {
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
          value={product.qty}
          min={1}
          type="number"
          className="w-12 h-8"
        ></input>
        <button>delete</button>
      </div>
    </div>
  );
};

export default CartItem;
