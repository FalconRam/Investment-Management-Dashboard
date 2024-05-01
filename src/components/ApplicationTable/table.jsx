import React from "react";

import "./table.css";
import leftArrow from "../../assets/leftarrow.png";
import leftDoubleArrow from "../../assets/leftdoublearrow.png";

const Table = ({ tableData, isEn }) => {
  const { columnNames, rowDatas, pagination } = tableData;
  const handleAttachDocs = () => {};

  const tagStatus = (valueEn) => {
    switch (valueEn) {
      case "Approved":
        return "approvalStatus-tag tag-success";
      case "Waiting":
        return "approvalStatus-tag tag-waiting";
      case "Rejected":
        return "approvalStatus-tag tag-rejected";
      default:
        return "no-btn";
    }
  };
  return (
    <div>
      <table className="styled-table">
        <thead>
          <tr className="">
            <th>
              <input type="checkbox" />
            </th>
            {columnNames.map((colName) => (
              <th key={colName.id}>
                <span>{isEn ? colName.valueEn : colName.valueKr}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowDatas.map((data, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{index + 1}</td>
              {Object.values(data).map((rowData, dIndex) => {
                let content;
                if (dIndex === 2) {
                  content = (
                    <button
                      className="docs-view-btn"
                      onClick={handleAttachDocs}
                    >
                      {isEn ? rowData.valueEn : rowData.valueKr}
                    </button>
                  );
                } else if (dIndex === 4) {
                  content = (
                    <button className={tagStatus(rowData.valueEn)}>
                      {isEn ? rowData.valueEn : rowData.valueKr}
                    </button>
                  );
                } else {
                  content = isEn ? rowData.valueEn : rowData.valueKr;
                }
                return (
                  <td key={dIndex} className="">
                    {content}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="table-footer">
        <div className="pagination">
          <img
            src={leftDoubleArrow}
            alt="Fast Previous"
            className="left-arrow"
          />
          <img src={leftArrow} alt="Previous" className="left-arrow" />

          {pagination.map((page) => (
            <span key={page} className={page === 1 && "page-number"}>
              {page}
            </span>
          ))}
          <img
            src={leftArrow}
            alt="Next"
            className="left-arrow left-arrow-rightSided"
          />
          <img
            src={leftDoubleArrow}
            alt="Fast Next"
            className="left-arrow left-arrow-rightSided"
          />
        </div>
      </div>
    </div>
  );
};

export default Table;
