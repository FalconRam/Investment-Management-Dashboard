import React from "react";

import "./investmentDashboard.css";

const InvestmentDashboard = ({ lang, appData, locale }) => {
  console.log(appData);
  return (
    <>
      <div>
        <div className="tabs">
          {appData.tabs.map((tab, index) => (
            <>
              <div
                key={index}
                className={index == 1 ? "active-tab" : "inactive-tab"}
              >
                <p className="tab-name">
                  {lang === locale.en ? tab.en : tab.kr}
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default InvestmentDashboard;
