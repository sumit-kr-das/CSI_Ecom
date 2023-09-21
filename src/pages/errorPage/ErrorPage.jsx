import React from "react";
import ErrorImage from "../../assets/error.png";
import "./errorPage.scss";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<section className="error_page">
			<img src={ErrorImage} alt="error_img" />
			<Link to="/">
				<button className="button_primary">Back to Home</button>
			</Link>
		</section>
	);
};

export default ErrorPage;
