const initialState = {
  products: [],
  total: 0,
};

// action est un objet qui a forcement un type (=payload)
function BasketReducer(state = initialState, action) {
  let nextState;

  const existingProduct = state.products.find(
    (product) => product.id === action.product.id
  );

  switch (action.type) {
    case "ADD_TO_BASKET":
      // si le produit existe
      if (existingProduct) {
        existingProduct.quantity = existingProduct.quantity + 1;
      } else {
        state.products.push(action.product);
      }

      nextState = {
        ...state,
      };

      break;

    case "REDUCE_QUANTITY":
      if (existingProduct) {
        existingProduct.quantity = existingProduct.quantity - 1;
      }

      nextState = {
        ...state,
      };

      break;

    case "DELETE_FROM_BASKET":
      if (existingProduct) {
        state.products.splice(
          state.products.findIndex(
            (product) => product.id === action.product.id
          ),
          1
        );
      }

      nextState = {
        ...state,
      };

      break;

    case "SAVE_ORDER":
      if (existingProduct) {
      }
      break;

    default:
      nextState = {
        ...state,
      };
      break;
  }
  const totalProductPrice = state.products.reduce(
    (accumulator, product) => accumulator + product.price * product.quantity,
    0
  );

  nextState = {
    ...state,
    total: totalProductPrice,
  };

  return nextState || state;
}

export default BasketReducer;
