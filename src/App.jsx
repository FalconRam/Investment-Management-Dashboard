import { useState } from "react";

import InvestmentDashboard from "./components/InvestmentDashboard/investmentDashboard";
import NavBar from "./components/NavBar/navBar";

import data from "./data";
import { locale } from "./localization";

import "./App.css";

function App() {
  const [lang, setLang] = useState(locale.en);
  return (
    <div className="">
      <NavBar setLang={setLang} isEn={lang === locale.en} locale={locale} />
      <InvestmentDashboard
        isEn={lang === locale.en}
        appData={data}
        locale={locale}
      />
    </div>
  );
}

export default App;
