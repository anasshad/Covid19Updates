import React, { useEffect, useState } from "react";
import { FormControl, NativeSelect, Select, MenuItem } from "@material-ui/core";
import { fetchCountries } from "../../api";
import styles from "./CountryPicker.module.css";

const CountryPicker = ({ value, onChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchData();
  }, [setFetchedCountries]);

  return (
    <div className={styles.container}>
      <FormControl className={styles.formControl}>
        <NativeSelect
          variant="outline"
          value={value}
          onChange={e => onChange(e.target.value)}
        >
          <option value="">Global</option>
          {fetchedCountries.map(country => (
            <option value={country}>{country}</option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default CountryPicker;
