import React, { useState } from "react";

import "./dropdown.css";
import upArrow from "../../assets/uparrow.png";

const Dropdown = ({ dropDownData, isEn }) => {
  const { descEn, descKr, items } = dropDownData;
  const [show, setShow] = useState(false);
  const handleShowItems = () => {
    setShow(!show);
  };
  return (
    <div className="dropdown">
      <button onClick={handleShowItems} className="drop-btn">
        <span>{isEn ? descEn : descKr}</span>
        <img
          src={upArrow}
          alt="icon"
          className={
            show ? "dropdown-arrow dropdown-arrow-rotate" : "dropdown-arrow"
          }
        />
      </button>
      <div className={show ? "show dropdown-content" : "dropdown-content"}>
        {items.map((item, index) => (
          <span key={index}>{isEn ? item.en : item.kr}</span>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
