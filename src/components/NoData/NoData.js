import React from "react";
import { Grid, Typography } from "@material-ui/core";
import NoDataImage from "../../assets/nodata.png";
import styles from "./NoData.module.css";

const NoData = () => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <img src={NoDataImage} className={styles.image} alt="No Data" />
      <Typography variant="h6" color="error">
        No Data Available
      </Typography>
    </Grid>
  );
};

export default NoData;
