import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import CartContext from "./context/cartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<CartContext>
		<App />
	</CartContext>
);
