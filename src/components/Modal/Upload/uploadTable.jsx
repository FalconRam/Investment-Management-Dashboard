import React, { useRef, useState } from "react";
import InvestmentDropdown from "../../Dropdown/Investment/investmentDropdown";

import "./uploadTable.css";
import circle_close from "../../../assets/circle-close.png";
import AlertModal from "../Alert/alertModal";

const UploadTable = ({ investment, isEn }) => {
  const fileRef = useRef();
  const [files, setFiles] = useState([]);
  const [error, setError] = useState({
    invalidFormats: false,
    filesCountExceeds: false,
    fileSizeExceeds: false,
  });

  const getFile = async () => {
    const newFiles = Array.from(fileRef.current.files);

    const isValidFormat = (fileName) => {
      const allowedFormats = [".jpg", ".jpeg", ".gif", ".png", ".pdf"];
      const ext = fileName.slice(fileName.lastIndexOf(".")).toLowerCase();
      return allowedFormats.includes(ext);
    };

    // File format validation
    const invalidFormats = newFiles.some((file) => !isValidFormat(file.name));
    if (invalidFormats) {
      setError({
        invalidFormats: true, // todo: Change as per error, as of now setting as true to all
        filesCountExceeds: true, // todo: Change as per error, as of now setting as true to all
        fileSizeExceeds: true, // todo: Change as per error, as of now setting as true to all
      });
      return;
    }

    // Upload limit validation - 100 MB
    const totalSize = newFiles.reduce((acc, file) => acc + file.size, 0);
    if (files.length + newFiles.length > 10 || totalSize > 100 * 1024 * 1024) {
      setError({
        invalidFormats: true, // todo: Change as per error, as of now setting as true to all
        filesCountExceeds: true, // todo: Change as per error, as of now setting as true to all
        fileSizeExceeds: true, // todo: Change as per error, as of now setting as true to all
      });
      return;
    }

    setError({
      invalidFormats: false,
      filesCountExceeds: false,
      fileSizeExceeds: false,
    });
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const upload = () => {
    fileRef.current.click();
  };

  const removeFile = (indexToRemove) => {
    setFiles((prevFiles) =>
      prevFiles.filter((file, index) => index !== indexToRemove)
    );
  };

  return (
    <div>
      <table className="upload-table">
        <tbody className="upload-table-body">
          {investment.labels.map((label, index) => {
            if (index <= 1) {
              return (
                <tr key={index}>
                  <td>{isEn ? label.valueEn : label.valueKr}</td>
                  <td>
                    {isEn ? label.labelValue.valueEn : label.labelValue.valueKr}
                  </td>
                </tr>
              );
            } else if (index === 2) {
              return (
                <tr key={index}>
                  <td>{isEn ? label.valueEn : label.valueKr}</td>
                  <td>
                    <InvestmentDropdown
                      types={label.labelValue.types}
                      isEn={isEn}
                    />
                  </td>
                </tr>
              );
            } else {
              return (
                <tr key={index}>
                  <td>{isEn ? label.valueEn : label.valueKr}</td>
                  <td>
                    <div className="upload-button">
                      <button
                        onClick={upload}
                        className="docs-view-btn select-investment"
                      >
                        {isEn
                          ? label.labelValue.select.valueEn
                          : label.labelValue.select.valueKr}
                      </button>
                      <input
                        type="file"
                        accept=".jpg,.jpeg,.gif,.png,.pdf"
                        onChange={getFile}
                        ref={fileRef}
                        multiple
                        max={10}
                        hidden
                      />
                      {files.map((file, index) => (
                        <div className="file-names">
                          <span>{file.name}</span>
                          <img
                            src={circle_close}
                            alt="Delete"
                            className="close-circle"
                            onClick={() => removeFile(index)}
                          />
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      {error.invalidFormats && (
        <AlertModal setError={setError} isEn={isEn} isSuccess={false} />
      )}
    </div>
  );
};

export default UploadTable;
