import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import filterIcon from "../assets/icons/filterIcon.svg";
import calendarIcon from "../assets/icons/calendarIcon.svg";

const FilterSort = () => {
  const [filterOption, setFilterOption] = useState("");
  const [sortOption, setSortOption] = useState("");

  const handleFilter = (event) => {
    setFilterOption(event.target.value);
  };
  const handleSort = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <>
      {/* ________filter _________*/}
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small" className="ml-0">
        <InputLabel
          id="demo-select-small"
          //to avoid misalignment of lable using flex and alignItems
          //to avoid overlapping of label over border using  padding,zIndex,background color
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "1px px", // Add padding to the label
            zIndex: 1,
            backgroundColor: "white", // Add background color to the label
          }}
        >
          <img
            src={filterIcon}
            alt="filterIcon"
            className="pr-1 lightGrey"
            disableTypography
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "16px",
              fontWeight: "500",
            }}
          />
          Filter
        </InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={filterOption}
          label="filterOption"
          onChange={handleFilter}
        >
          <MenuItem value="Anything">Anything</MenuItem>
        </Select>
      </FormControl>

      {/* _________sort___________ */}
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel
          id="demo-select-small"
          //to avoid misalignment of lable using flex and alignItems
          //to avoid overlapping of label over border using  padding,zIndex,background color
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "1px px", // Add padding to the label
            zIndex: 1,
            backgroundColor: "white", // Add background color to the label
          }}
        >
          <img
            src={calendarIcon}
            alt="calendarIcon"
            className="pr-1"
            disableTypography
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "16px",
              fontWeight: "500",
            }}
          />
          Today
        </InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={sortOption}
          label="sortOption"
          onChange={handleSort}
        >
          <MenuItem value="Anything">Anything</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default FilterSort;
