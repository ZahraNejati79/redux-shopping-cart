import { connect } from "react-redux";
import { addToCart } from "../Redux/Shopping/Shopping-action";
const Product = ({ producs, addToCart }) => {
  return producs.map((p) => {
    return (
      <div
        key={p.id}
        className="flex items-center justify-between w-full md:w-2/3 lg:w-2/5  shadow-lg hover:shadow-2xl cursor-pointer rounded-lg mb-4"
      >
        <div className="rounded-l-2xl h-40 w-40 bg-red-200 mr-2">
          <img alt="" />
        </div>

        <div className="flex flex-col items-center justify-evenly gap-y-4">
          <div>{p.title}</div>
          <div>{p.description}</div>
          <div>{p.price}</div>
        </div>

        <div className="flex flex-col items-center justify-evenly mr-4">
          <button
            onClick={() => addToCart(p.id)}
            className="bg-red-200 p-2 rounded-lg"
          >
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    );
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
