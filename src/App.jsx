import { useState } from "react";

import InvestmentDashboard from "./components/InvestmentDashboard/investmentDashboard";
import NavBar from "./components/NavBar/navBar";

import data from "./data";
import { locale } from "./localization";

import "./App.css";

function App() {
  const [lang, setLang] = useState(locale.en);
  console.log(lang);
  return (
    <div className="">
      <NavBar lang={lang} setLang={setLang} locale={locale} />
      <InvestmentDashboard lang={lang} appData={data} locale={locale} />
    </div>
  );
}

export default App;
