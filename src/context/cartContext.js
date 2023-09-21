import { createContext, useReducer } from "react";
import { productData } from "../constant/product";

const INITIAL_STATE = {
	products: productData,
	cart: JSON.parse(localStorage.getItem("cart")) || [],
	loading: false
};

export const Cart = createContext();

const cartReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			return {
				...state,
				cart: [...state.cart, action.payload.product]
			};
		case "REMOVE_FROM_CART":
			return {
				...state,
				cart: state.cart.filter(item => item._id !== action.payload.product)
			};
		default:
			return state;
	}
};

const CartContext = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
	
	return (
		<Cart.Provider
			value={{
				products: state.products,
				cart: state.cart,
				dispatch
			}}
		>
			{children}
		</Cart.Provider>
	);
};

export default CartContext;