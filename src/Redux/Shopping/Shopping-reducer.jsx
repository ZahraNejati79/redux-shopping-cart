import * as actionTypes from "./Shopping-type";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      sku: 18644119330491312,
      title: "Sphynx Tie Dye Grey T-Shirt",
      description: "Sphynx Tie Dye Grey",
      availableSizes: ["X", "L", "XL", "XXL"],
      price: 10,
      isFreeShipping: true,
    },

    {
      id: 2,
      sku: 11854078013954528,
      title: "Danger Knife Grey T-Shirt",
      description: "Danger Knife Grey",
      availableSizes: ["X", "M", "L"],
      price: 14.9,
      isFreeShipping: true,
    },

    {
      id: 3,
      sku: 876661122392077,
      title: "White DGK Script Tee",
      description: "White DGK Script",
      availableSizes: ["X", "M", "L"],
      price: 14.9,
      isFreeShipping: true,
    },

    {
      id: 4,
      sku: 9197907543445677,
      title: "Born On The Streets  T-Shirt",
      description: "Born On The Streets",
      availableSizes: ["XL"],
      price: 25.9,
      isFreeShipping: false,
    },

    {
      id: 5,
      sku: 10547961582846888,
      title: "Tso 3D Short Sleeve T-Shirt A",
      description: "Tso 3D Short Sleeve",
      availableSizes: ["X", "L", "XL"],
      price: 10.9,
      isFreeShipping: false,
    },

    {
      id: 6,
      sku: 6090484789343891,
      title: "Man Tie Dye Cinza Grey T-Shirt",
      description: "Man Tie Dye Cinza Grey",
      availableSizes: ["XL", "XXL"],
      price: 49.9,
      isFreeShipping: false,
    },

    {
      id: 7,
      sku: 18532669286405342,
      title: "Crazy Monkey Black T-Shirt",
      description: "1977 Infantil",
      availableSizes: ["S"],
      style: "Preto com listras brancas",
      price: 22.5,
      isFreeShipping: true,
    },

    {
      id: 8,
      sku: 5619496040738316,
      title: "Tso 3D Black T-Shirt",
      description: "",
      availableSizes: ["XL"],
      style: "Azul escuro",
      price: 18.7,
      isFreeShipping: false,
    },
    {
      id: 9,
      sku: 11600983276356165,
      title: "Crazy Monkey Grey",
      description: "",
      availableSizes: ["L", "XL"],
      price: 134.9,
      isFreeShipping: true,
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find((pro) => pro.id === action.payload.id);
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_QTY:
      return {};
    case actionTypes.LOAD_CURRENT_ITEM:
      return {};
    default:
      return state;
  }
};

export default shopReducer;
