import React, { useState } from "react";

import "./uploadModal.css";

import data from "../../../data";

import close from "../../../assets/close.png";
import UploadTable from "./uploadTable";
import AlertModal from "../Alert/alertModal";

const UploadModal = ({ isEn, setUploadModal }) => {
  const { investment, buttons } = data.modal;
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const closeModal = () => {
    setUploadModal(false);
  };
  const handlSave = () => {
    setOpenSuccessModal(true);
  };
  return (
    <div className="modal-upload-overlay">
      <div className="modal-upload">
        <div className="modal-upload-top">
          <div className="modal-upload-img-close">
            <p className="modal-title">
              {isEn ? investment.title.titleEn : investment.title.titleKr}
            </p>
            <button className="close-btn" onClick={closeModal}>
              <img src={close} alt="Close" className="close-btn-img" />
            </button>
          </div>
          <div className="divider-modal" />
        </div>
        <div className="modal-upload-middle">
          <UploadTable investment={investment} isEn={isEn} />
          <ul className="modal-upload-suggestions">
            {investment.uploadSuggestions.map((item, index) => (
              <li key={index}>{isEn ? item.valueEn : item.valueKr}</li>
            ))}
          </ul>
        </div>
        <div className="divider-modal divider_modal_2" />
        <div className="modal-upload-btn-bottom" onClick={handlSave}>
          <button className="ok-btn">
            {isEn ? buttons.save.valueEn : buttons.save.valueKr}
          </button>
          <button className="ok-btn cancel-btn" onClick={closeModal}>
            {isEn ? buttons.cancel.valueEn : buttons.cancel.valueKr}
          </button>
        </div>
      </div>
      {openSuccessModal && (
        <AlertModal
          isEn={isEn}
          isSuccess={true}
          setOpenSuccessModal={setOpenSuccessModal}
          setUploadModal={setUploadModal}
        />
      )}
    </div>
  );
};

export default UploadModal;
