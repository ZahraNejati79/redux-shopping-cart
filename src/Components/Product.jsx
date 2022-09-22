const Product = ({ producs }) => {
  return producs.map((p) => {
    return (
      <div className="flex items-center justify-between w-full md:w-2/3 lg:w-2/5  shadow-lg hover:shadow-2xl cursor-pointer rounded-lg mb-4">
        <div className="rounded-l-2xl h-40 w-40 bg-yellow-500 mr-2">
          <img alt="" />
        </div>

        <div className="flex flex-col items-center justify-evenly gap-y-4">
          <div>{p.title}</div>
          <div>{p.description}</div>
          <div>{p.price}</div>
        </div>

        <div className="flex flex-col items-center justify-evenly mr-4">
          <button className="bg-yellow-500 p-2 rounded-lg">
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    );
  });
};

export default Product;
