import React, { useEffect, useState } from 'react';
import "../../styles/index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const SimpleCounter = () => {
	const [digits, setDigits] = useState(Array(6).fill(0));
  
	useEffect(() => {
	  const interval = setInterval(() => {
		setDigits((prevDigits) => {
		  const newDigits = [...prevDigits];
		  for (let i = newDigits.length - 1; i >= 0; i--) {
			if (newDigits[i] < 9) {
			  newDigits[i] += 1;
			  break;
			} else {
			  newDigits[i] = 0;
			  if (i === 0) return newDigits;
			}
		  }
		  return newDigits;
		});
	  }, 1000);
	  return () => clearInterval(interval);
	}, []);
  
	return (
		<div className="counter-container">
			<div className="icon mt-5">
		  <FontAwesomeIcon icon={faClock} style={{ width: '40px', height: '40px', color: 'white' }} />
		  </div>
		  {digits.map((digit, index) => (
			<div key={index} className="digit mt-5">
			  {digit}
			</div>
		  ))}
		</div>
	  );
	};

export default SimpleCounter;
