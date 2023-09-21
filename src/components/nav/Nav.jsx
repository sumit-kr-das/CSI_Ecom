import React, { useContext } from "react";
import LogoLight from "../../assets/logo-light.svg";
import BellIcn from "../../assets/icons/bell.svg";
import CartIcn from "../../assets/icons/cart.svg";
import UserIcn from "../../assets/icons/user.svg";
import { IoMdSearch } from "react-icons/io";
import "./nav.scss";
import { Cart } from "../../context/cartContext";

const Nav = () => {
	const { cart } = useContext(Cart);
	return (
		<nav>
			<img src={LogoLight} alt="logo_light" />
			<div className="search_container">
				<input type="text" placeholder="Search for products" />
				<IoMdSearch className="icn" />
			</div>
			<div className="right_container">
				<img src={BellIcn} alt="bell" />
				<div className="cart_section_icn">
					<img src={CartIcn} alt="cart" />
					<div className="cart_qty">{cart?.length}</div>
				</div>
				<img src={UserIcn} alt="user" />
			</div>
		</nav>
	);
};

export default Nav;
