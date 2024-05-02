import { useState } from "react";

import InvestmentDashboard from "./components/InvestmentDashboard/investmentDashboard";
import NavBar from "./components/NavBar/navBar";

import data from "./data";
import { locale } from "./localization";

import "./App.css";

function App() {
  const [lang, setLang] = useState(locale.kr); // Set Lang for App
  return (
    <>
      <NavBar setLang={setLang} isEn={lang === locale.en} locale={locale} />
      <InvestmentDashboard
        isEn={lang === locale.en}
        appData={data}
        locale={locale}
      />
    </>
  );
}

export default App;
