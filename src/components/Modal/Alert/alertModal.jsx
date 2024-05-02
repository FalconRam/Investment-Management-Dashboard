import React from "react";

import "./alertModal.css";

import data from "../../../data";

import close from "../../../assets/close.png";
import warning_alert from "../../../assets/warning-alert.png";
import success_alert from "../../../assets/success-alert.png";

const AlertModal = ({
  setError,
  isEn,
  isSuccess,
  setOpenSuccessModal,
  setUploadModal,
}) => {
  const {
    upload_size_warningAlert,
    upload_successAlert,
    investChange_message,
  } = data.modal.alert;
  const { ok, cancel } = data.modal.buttons;
  const closeModal = () => {
    if (isSuccess) {
      setOpenSuccessModal(false);
      setUploadModal(false);
      return;
    }
    setError({
      invalidFormats: false,
      filesCountExceeds: false,
      fileSizeExceeds: false,
    });
  };
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-top">
          <div className="modal-img-close">
            {isSuccess ? (
              <img src={success_alert} alt="Alert" className="alert-btn-img" />
            ) : (
              <img src={warning_alert} alt="Alert" className="alert-btn-img" />
            )}
            <button className="close-btn" onClick={closeModal}>
              <img src={close} alt="Close" className="close-btn-img" />
            </button>
          </div>
          {isSuccess ? (
            <p className="modal-content">
              {isEn
                ? upload_successAlert.alertMessageEn
                : upload_successAlert.alertMessageKr}
            </p>
          ) : (
            <p className="modal-content">
              {isEn
                ? upload_size_warningAlert.alertMessageEn
                : upload_size_warningAlert.alertMessageKr}
            </p>
          )}
        </div>
        <div className="modal-btn-bottom">
          <button className="ok-btn" onClick={closeModal}>
            {isEn ? ok.valueEn : ok.valueKr}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
