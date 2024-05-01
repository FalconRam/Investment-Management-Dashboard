import React from "react";

import "./applicationTable.css";
import Dropdown from "../Dropdown/dropdown";
import Table from "./table";

const ApplicationTable = ({ applicationData, isEn }) => {
  return (
    <div className="table-container">
      <div className="table-presets-top">
        <div className="preset-left-top">
          <p className="preset-title">
            {isEn
              ? applicationData.tablePresets.tableTitleEn
              : applicationData.tablePresets.tableTitleKr}
          </p>
          <p className="preset-status">
            {isEn
              ? applicationData.tablePresets.statusEn
              : applicationData.tablePresets.statusKr}
          </p>
        </div>

        <div className="preset-right-top">
          <Dropdown dropDownData={applicationData.dropDowns[0]} isEn={isEn} />
          <Dropdown dropDownData={applicationData.dropDowns[1]} isEn={isEn} />
          <Dropdown dropDownData={applicationData.dropDowns[2]} isEn={isEn} />
        </div>
      </div>

      <div className="divider" />

      <div className="table-presets-down">
        <button className="resgistration-btn">
          {isEn
            ? applicationData.tablePresets.buttons.resgistration.valueEn
            : applicationData.tablePresets.buttons.resgistration.valueKr}
        </button>
        <div className="preset-down-right">
          <p className="selected-count">
            {isEn
              ? applicationData.tablePresets.others.selected.valueEn
              : applicationData.tablePresets.others.selected.valueKr}
          </p>
          <Dropdown
            dropDownData={
              applicationData.tablePresets.others.approvalStatusDropdown
            }
            isEn={isEn}
          />
          <button className="resgistration-btn">
            {isEn
              ? applicationData.tablePresets.buttons.save.valueEn
              : applicationData.tablePresets.buttons.save.valueKr}
          </button>
        </div>
      </div>
      <Table tableData={applicationData.tableData} isEn={isEn} />
    </div>
  );
};

export default ApplicationTable;
