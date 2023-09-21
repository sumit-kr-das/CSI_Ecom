import React from "react";
import Android from "../../assets/play-store.svg";
import IOS from "../../assets/app-store.svg";
import "./footer.scss";

const Footer = () => {
	return (
		<footer>
			<div className="footer_container">
				<ul>
					<li>
						<a href="/">About</a>
					</li>
					<li>
						<a href="/">Contact Us</a>
					</li>
					<li>
						<a href="/">About Us</a>
					</li>
					<li>
						<a href="/">Careers</a>
					</li>
					<li>
						<a href="/">Our Stories</a>
					</li>
					<li>
						<a href="/">Press</a>
					</li>
					<li>
						<a href="/">Wholesale</a>
					</li>
					<li>
						<a href="/">Corporate Information</a>
					</li>
				</ul>
				<ul>
					<li>
						<a href="/">Consumer policy</a>
					</li>
					<li>
						<a href="/">Cancellation</a>
					</li>
					<li>
						<a href="/">Terms of use</a>
					</li>
					<li>
						<a href="/">Security</a>
					</li>
					<li>
						<a href="/">Our Stories</a>
					</li>
					<li>
						<a href="/">Privacy</a>
					</li>
					<li>
						<a href="/">Sitemap</a>
					</li>
				</ul>
				<ul>
					<li>
						<a href="/">Help</a>
					</li>
					<li>
						<a href="/">Payments</a>
					</li>
					<li>
						<a href="/">Shipping</a>
					</li>
					<li>
						<a href="/">Return policy</a>
					</li>
					<li>
						<a href="/">FAQ</a>
					</li>
					<li>
						<a href="/">Report</a>
					</li>
				</ul>
				<div className="social_links">
					<p>Download our app in your various devices</p>
					<div>
						<img src={Android} alt="android" />
						<img src={IOS} alt="ios" />
					</div>
				</div>
			</div>
			<div className="copyright">© 2023 Dsigned by Sumit Kumar Das · Built by Sumit Kumar Das</div>
		</footer>
	);
};

export default Footer;
