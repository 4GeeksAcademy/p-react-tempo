import React from "react";

const Digit = ({digit, icon}) => {
  return (
    <div className="digit">
      {digit} {icon}
    </div>
  );
};

export default Digit;