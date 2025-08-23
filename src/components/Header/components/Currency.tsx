import React from "react";
import ".././header.style.scss";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { type SelectChangeEvent } from "@mui/material/Select";

export default function currencySelection() {
  const [currency, setCurrency] = React.useState("RUB");

  const handleChange = (event: SelectChangeEvent) => {
    setCurrency(event.target.value as string);
  };

  return (
    <Box className="currency">
      <FormControl>
        <InputLabel>Валюта</InputLabel>
        <Select
          id="currencySelect"
          size="small"
          defaultValue="RUB"
          value={currency}
          label="currency"
          onChange={handleChange}
        >
          <MenuItem value={"RUB"}>RUB</MenuItem>
          <MenuItem value={"USD"}>USD</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
