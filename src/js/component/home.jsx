import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Jumbotron } from "./Jumbotron";
import { Nabvar } from "./Nabvar";
import { Cards } from "./Cards";

//create your first component
const Home = () => {
	return (
		<div className="text-center p-5">
			<Nabvar />
			<Jumbotron />
				<div className="row row-cols-4 mt-4 display: blockquote">
					<Cards/>
					<Cards title='Baby Rigo' description='Brief description about the image of baby rigo'/>
					<Cards title='Hello World' description='Brief description about the image of baby rigo'/>
					<Cards title='ready' description='Brief description about the image of baby rigo'/>
			</div>
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
