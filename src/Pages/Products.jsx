import Product from "../Components/Product";
import * as pro from "../db";
const Products = () => {
  console.log(pro.products);
  return (
    <div>
      <h2>this is products page</h2>
      <section className="flex flex-col items-center justify-center">
        <Product producs={pro.products} />
      </section>
    </div>
  );
};

export default Products;
