import React from "react";
import Digit from "./Digit"
import "../../styles/index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const Home = ({ seconds }) => {

	const s = seconds.toString().padStart(6, '0');
  
	const d0 = s[0];
	const d1 = s[1];
	const d2 = s[2];
	const d3 = s[3];
	const d4 = s[4];
	const d5 = s[5];
	const icon= <FontAwesomeIcon icon={faClock} />;
  
	return (
	  <div className="counter-container">
		<Digit icon={icon} />
		<Digit digit={d0} />
		<Digit digit={d1} />
		<Digit digit={d2} />
		<Digit digit={d3} />
		<Digit digit={d4} />
		<Digit digit={d5} />
	  </div>
	);
  };

export default Home;
