import React from "react";
import QuickDeliveryImg from "../../assets/delivery-boy.webp";
import "./quickDelivery.scss";

const QuickDelivery = () => {
	return (
		<section className="quick_delivery">
			<div>
				<h1>Quick delivery at your home</h1>
				<p>
					Get express delivery courier services from Ecom Express, the best
					courier companies in India, and deliver your packages safely and on
					time to your location.
				</p>
			</div>
			<div>
				<img src={QuickDeliveryImg} alt="quick delivery" />
			</div>
		</section>
	);
};

export default QuickDelivery;
