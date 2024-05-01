import React, { useEffect, useState } from "react";

import "./table.css";
import leftArrow from "../../assets/leftarrow.png";
import leftDoubleArrow from "../../assets/leftdoublearrow.png";
import { statusDesc } from "../../localization";
import { tagStatus } from "../../utils";
import AlertModal from "../Modal/Alert/alertModal";
import UploadModal from "../Modal/Upload/uploadModal";

const Table = ({ tableData, isEn }) => {
  const { columnNames, rowDatas, pagination } = tableData;

  const handleAttachDocs = () => {};

  const [disableItems, setDisabledItems] = useState(
    Array(rowDatas.length + 1).fill(0)
  );

  function setDisableDriver(rowDatas) {
    rowDatas.map((data, rowIndex) => {
      Object.values(data).map((item) => {
        if (
          disableItems[rowIndex] === 0 &&
          (item.valueEn === statusDesc.approved ||
            item.valueEn === statusDesc.waiting)
        ) {
          setDisabledItems((prev) => {
            let newItems = [...prev];
            newItems[rowIndex] = 1;
            return newItems;
          });
        }
      });
    });
  }

  useEffect(() => {
    setDisableDriver(rowDatas);
  }, [rowDatas]);

  const [modalContent, setModalContent] = useState(null);
  const [uploadModal, setUploadModal] = useState(false);

  const handleViewModal = () => {
    // setModalContent(content);
    setUploadModal(true);
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
                <input
                  type="checkbox"
                  disabled={disableItems[index + 1] === 1 ? true : false}
                />
              </td>
              <td>{index + 1}</td>
              {Object.values(data).map((rowData, dIndex) => {
                let content;
                if (dIndex === 2) {
                  content = (
                    <button
                      className="docs-view-btn"
                      onClick={() => handleViewModal("Modal")}
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
      {uploadModal && (
        <UploadModal setUploadModal={setUploadModal} isEn={isEn} />
      )}
      {modalContent && (
        <AlertModal
          modalContent={modalContent}
          setModalContent={setModalContent}
          isEn={isEn}
        />
      )}
    </div>
  );
};

export default Table;
