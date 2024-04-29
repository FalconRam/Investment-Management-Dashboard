import React from "react";

import "./navBar.css";

const NavBar = ({ lang, setLang, locale }) => {
  const handleLangChange = () => {
    setLang((prev) => {
      if (prev === locale.en) return locale.kr;
      return locale.en;
    });
  };

  return (
    <div className="navBar-container">
      <h5>InvesDash</h5>
      <button className="lang-select" onClick={handleLangChange}>
        {lang === locale.en ? "한국인" : "English"}
      </button>
    </div>
  );
};

export default NavBar;
