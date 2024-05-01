import React from "react";

import Tabs from "../Tabs/tabs";
import ApplicationTable from "../ApplicationTable/applicationTable";

import "./investmentDashboard.css";

const InvestmentDashboard = ({ isEn, appData }) => {
  return (
    <>
      <div className="dashboard-container">
        <Tabs tabs={appData.tabs} isEn={isEn} />
        <ApplicationTable applicationData={appData.tabs[1]} isEn={isEn} />
      </div>
    </>
  );
};

export default InvestmentDashboard;
