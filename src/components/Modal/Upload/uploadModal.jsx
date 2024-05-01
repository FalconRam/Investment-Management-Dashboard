import React from "react";

import "./uploadModal.css";

import data from "../../../data";

import close from "../../../assets/close.png";
import circle_close from "../../../assets/circle-close.png";

const UploadModal = ({ isEn, setUploadModal }) => {
  const { investment, buttons } = data.modal;
  const closeModal = () => {
    setUploadModal(null);
  };
  return (
    <div className="modal-overlay">
      <div className="modal modal-upload">
        <div className="modal-upload-top">
          <div className="modal-upload-img-close">
            <p className="modal-title">
              {isEn ? investment.title.titleEn : investment.title.titleKr}
            </p>
            <button className="close-btn" onClick={closeModal}>
              <img src={close} alt="Close" className="close-btn-img" />
            </button>
          </div>
          {/* <p className="modal-upload-content">
            {isEn
              ? upload_size_warningAlert.alertMessageEn
              : upload_size_warningAlert.alertMessageKr}
          </p> */}
        </div>
        <div className="divider-modal" />
        <div className="modal-btn-middle">
          <table>
            <tbody>
              {investment.labels.map((label, index) => (
                <tr key={index} className="table-col">
                  <td>{isEn ? label.valueEn : label.valueKr}</td>
                </tr>
              ))}
              {investment.labelsValue.map((labelValue, index) => {
                console.log(labelValue);
                index <= 1 || index === 3 ? (
                  <tr key={index} className="table-col">
                    <td>{isEn ? labelValue.valueEn : labelValue.valueKr}</td>
                  </tr>
                ) : (
                  <tr key={index} className="table-col">
                    <td>{isEn ? labelValue.valueEn : labelValue.valueKr}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="modal-upload-btn-bottom">
          <button className="ok-btn">
            {isEn ? buttons.save.valueEn : buttons.save.valueKr}
          </button>
          <button className="ok-btn cancel-btn">
            {isEn ? buttons.cancel.valueEn : buttons.cancel.valueKr}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
