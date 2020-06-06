import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import styles from "./App.module.css";
import { Grid, Typography } from "@material-ui/core";
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
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} md={6}>
          <img src={Logo} className={styles.image} alt="logo" />
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            Select any country from options or map below to view updates
          </Typography>
          <CountryPicker value={country} onChange={setCountry} />
        </Grid>
      </Grid>
      <Grid container alignItems="flex-start">
        <Grid item xs={12} md={6}>
          <Cards data={data} />
        </Grid>
        <Grid item xs={12} md={5}>
          <Map setTooltipContent={setContent} setCountry={setCountry} />
        </Grid>
      </Grid>
      <Chart data={data} country={country} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}
