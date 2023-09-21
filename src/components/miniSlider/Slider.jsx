import React from "react";
import Img1 from "../../assets/mini/offer-1.png";
import Img2 from "../../assets/mini/offer-2.png";
import Img3 from "../../assets/mini/offer-3.webp";
import Img4 from "../../assets/mini/offer-4.png";
import Img5 from "../../assets/mini/offer-5.png";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

const Slider = ({ swiperRef }) => {
	return (
		<div className="slider">
			<Swiper
				spaceBetween={12}
				slidesPerView={4}
				onSlideChange={() => console.log("slide change")}
				loop={true}
				autoplay={{
					delay: 1500
				}}
				onSwiper={(swiper) => {
					swiperRef.current = swiper;
				}}
				modules={[Autoplay]}
			>
				<SwiperSlide>
					<div className="swiper_item">
						<img src={Img1} alt="img_one" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="swiper_item">
						<img src={Img2} alt="img_one" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="swiper_item">
						<img src={Img3} alt="img_one" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="swiper_item">
						<img src={Img4} alt="img_one" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="swiper_item">
						<img src={Img5} alt="img_one" />
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Slider;
