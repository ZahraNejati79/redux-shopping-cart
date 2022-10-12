import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, loadCurrentItem } from "../Redux/Shopping/Shopping-action";
const Product = ({ producs, addToCart, loadCurrentItem }) => {
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

        <div className="flex flex-col items-center justify-evenly mr-4 gap-y-4">
          <Link
            to={`/product/${p.id}`}
            className="hover:text-red-400  p-2 rounded-lg"
          >
            <button onClick={() => loadCurrentItem(p)}> دیدن محصول </button>
          </Link>
          <button
            onClick={() => addToCart(p.id)}
            className="hover:text-red-400 p-2 rounded-lg"
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
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
