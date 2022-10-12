import { connect } from "react-redux";
import { addToCart } from "../Redux/Shopping/Shopping-action";

const SingleItem = ({ currentItem, addToCart }) => {
  return (
    <div className="flex items-center justify-center mt-8 ">
      <div className="flex items-center justify-center gap-x-8  max-w-xl shadow-2xl pr-8">
        <div className=" bg-red-200 w-60 h-60">
          <div>{currentItem.img}</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-4">
          <div>{currentItem.title}</div>
          <div>{currentItem.description}</div>
          <div>{currentItem.price}$</div>
          <button
            className="hover:text-red-400 "
            onClick={() => addToCart(currentItem.id)}
          >
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
