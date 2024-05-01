import React from "react";

import "./tabs.css";

const Tabs = ({ tabs, isEn }) => {
  return (
    <div className="tabs">
      {tabs.map((tab, index) => (
        <>
          <div
            key={index}
            className={index === 1 ? "active-tab" : "inactive-tab"}
          >
            <p className="tab-name">{isEn ? tab.en : tab.kr}</p>
          </div>
        </>
      ))}
    </div>
  );
};

export default Tabs;
