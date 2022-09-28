import Product from "../Components/Product";

import { connect } from "react-redux";
const Products = ({ products }) => {
  return (
    <div>
      <h2>this is products page</h2>
      <section className="flex flex-col items-center justify-center">
        <Product producs={products} />
      </section>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
