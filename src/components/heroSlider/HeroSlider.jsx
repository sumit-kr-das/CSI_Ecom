import React from "react";
// Images
import Img1 from "../../assets/slider/slider-2.jpg";
import Img2 from "../../assets/slider/slider-3.jpg";
import Img3 from "../../assets/slider/slider-4.jpg";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Stylesheet
import "./heroSlider.scss";

const HeroSlider = () => {
	return (
		<div className="ass">
			<section className="hero_slider">
				<Swiper
					spaceBetween={12}
					slidesPerView={1}
					pagination={{
						dynamicBullets: true,
					}}
					className="mySwiper"
				>
					<SwiperSlide>
						<div className="swiper_slider_wrapper">
							<img src={Img2} alt="slider_img" />
							<div className="swiper_content">
								<h2>Best Different Type of Grocery Store</h2>
								<p>
									Dramatically facilitate effective total linkage for <br /> go
									forward processes
								</p>
								<a href="#product_section">
									<button className="button_primary">Shop Now</button>
								</a>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="swiper_slider_wrapper">
							<img src={Img3} alt="slider_img" />
							<div className="swiper_content">
								<h2>Best Different Type of Grocery Store</h2>
								<p>
									Dramatically facilitate effective total linkage for <br /> go
									forward processes
								</p>
								<a href="#product_section">
									<button className="button_primary">Shop Now</button>
								</a>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="swiper_slider_wrapper">
							<img src={Img1} alt="slider_img" />
							<div className="swiper_content">
								<h2>Best Different Type of Grocery Store</h2>
								<p>
									Dramatically facilitate effective total linkage for <br /> go
									forward processes
								</p>
								<a href="#product_section">
									<button className="button_primary">Shop Now</button>
								</a>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</section>
		</div>
	);
};

export default HeroSlider;
