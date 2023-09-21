import React from "react";
import Nav from "../components/nav/Nav";
import HeroSlider from "../components/heroSlider/HeroSlider";
import MiniSliderContainer from "../components/miniSlider/MiniSliderContainer";
import ProductContainer from "../components/productContainer/ProductContainer";
import QuickDelivery from "../components/quickDelivery/QuickDelivery";
import Footer from "../components/footer/Footer";

const Home = () => {
	return (
		<div>
			<Nav />
			<HeroSlider />
			<MiniSliderContainer />
			<ProductContainer />
			<QuickDelivery />
			<Footer />
		</div>
	);
};

export default Home;
