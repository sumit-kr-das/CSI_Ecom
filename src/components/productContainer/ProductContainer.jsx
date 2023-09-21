import React, { useContext, useEffect } from "react";
import { BsFillCartPlusFill, BsFillCartDashFill } from "react-icons/bs";
import "./productContainer.scss";
import { Cart } from "../../context/cartContext";

const Product = ({ item }) => {
	const { cart, dispatch } = useContext(Cart);
	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	return (
		<div className="product">
			<img src={item.src} alt="product-data" />
			<p className="title">{item.title}</p>
			<div className="add_cart">
				<p>&#8377;{item.price}</p>
				<div className="cart_icn">
					{cart.includes(item) ? (
						<BsFillCartDashFill
							className="remove_icn"
							onClick={() =>
								dispatch({
									type: "REMOVE_FROM_CART",
									payload: { product: item._id },
								})
							}
						/>
					) : (
						<BsFillCartPlusFill
							className="icn"
							onClick={() =>
								dispatch({
									type: "ADD_TO_CART",
									payload: { product: item },
								})
							}
						/>
					)}
				</div>
			</div>
			<div className="in_stock">{item.stock} Stock</div>
		</div>
	);
};

const ProductContainer = () => {
	const { products } = useContext(Cart);
	return (
		<div className="product_container" id="product_section">
			{products.map((item, index) => (
				<Product item={item} key={index} />
			))}
		</div>
	);
};

export default ProductContainer;
