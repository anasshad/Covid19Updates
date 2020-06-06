import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import styles from "./App.module.css";
import { fetchData } from "./api";
import { Cards, Chart, CountryPicker, Map } from "./components";
import Logo from "./assets/COVID19LOGO.png";

export default function App() {
  const [data, setData] = useState({});
  const [content, setContent] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    const dataFunction = async () => {
      const fetchedData = await fetchData(country);
      setData(fetchedData);
    };
    dataFunction();
  }, [country]);

  return (
    <div className={styles.container}>
      <img src={Logo} className={styles.image} alt="logo" />
      <CountryPicker value={country} onChange={setCountry} />
      <Cards data={data} />
      <Map setTooltipContent={setContent} setCountry={setCountry} />
      <Chart data={data} country={country} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}
