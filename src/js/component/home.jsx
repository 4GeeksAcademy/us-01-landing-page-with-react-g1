import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Jumbotron } from "./Jumbotron.jsx";
import { Nabvar } from "./Nabvar.jsx";
import { Cards } from "./Cards.jsx";
import { Footer } from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center p-5">
			<Nabvar />
			<Jumbotron />
			<div className="row row-cols-4 mt-4 display: blockquote">
				<Cards />
				<Cards title='Baby Rigo' description='Brief description about the image of baby rigo' />
				<Cards title='Hello World' description='Brief description about the image of baby rigo' />
				<Cards title='ready' description='Brief description about the image of baby rigo' />
			</div>
			<Footer/>			
		</div>
	);
};

export default Home;
