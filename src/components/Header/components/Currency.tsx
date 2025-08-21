import React from "react";
// import "./header.style.scss";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { type SelectChangeEvent } from "@mui/material/Select";

export default function currencySelection() {
  const [currency, setCurrency] = React.useState("USD");

  const handleChange = (event: SelectChangeEvent) => {
    setCurrency(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl>
        <InputLabel>Currency</InputLabel>
        <Select
          id="currencySelect"
          value={currency}
          label="currency"
          onChange={handleChange}
        >
          <MenuItem value={"USD"}>USD</MenuItem>
          <MenuItem value={"RUB"}>RUB</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
