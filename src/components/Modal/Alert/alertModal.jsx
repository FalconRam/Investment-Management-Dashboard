import React from "react";

import "./alertModal.css";

import data from "../../../data";

import close from "../../../assets/close.png";
import warning_alert from "../../../assets/warning-alert.png";
import success_alert from "../../../assets/success-alert.png";

const AlertModal = ({ modalContent, setModalContent, isEn }) => {
  const {
    upload_size_warningAlert,
    upload_successAlert,
    investChange_message,
  } = data.modal.alert;
  const { ok, cancel } = data.modal.buttons;
  const closeModal = () => {
    setModalContent(null);
  };
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-top">
          <div className="modal-img-close">
            <img src={warning_alert} alt="Alert" className="alert-btn-img" />
            <button className="close-btn" onClick={closeModal}>
              <img src={close} alt="Close" className="close-btn-img" />
            </button>
          </div>
          <p className="modal-content">
            {isEn
              ? upload_size_warningAlert.alertMessageEn
              : upload_size_warningAlert.alertMessageKr}
          </p>
        </div>
        <div className="modal-btn-bottom">
          <button className="ok-btn">{isEn ? ok.valueEn : ok.valueKr}</button>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
