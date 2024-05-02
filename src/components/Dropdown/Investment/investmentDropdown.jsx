import React, { useState } from "react";

import "./investmentDropdown.css";
import upArrow from "../../../assets/uparrow.png";

const InvestmentDropdown = ({ types, isEn }) => {
  const [show, setShow] = useState(false);
  const handleShowItems = () => {
    setShow(!show);
  };
  return (
    <div className="dropdown-investment">
      <button
        onClick={handleShowItems}
        className="drop-btn drop-btn-investment"
      >
        <span>{isEn ? types[0].valueEn : types[0].valueKr}</span>
        <img
          src={upArrow}
          alt="icon"
          className={
            show ? "dropdown-arrow dropdown-arrow-rotate" : "dropdown-arrow"
          }
        />
      </button>
      <div
        className={
          show
            ? "show dropdown-content dropdown-investment-content"
            : "dropdown-content dropdown-investment-content"
        }
      >
        {types.map((type, index) => (
          <span key={index}>{isEn ? type.valueEn : type.valueKr}</span>
        ))}
      </div>
    </div>
  );
};

export default InvestmentDropdown;
