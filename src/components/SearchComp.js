import * as React from "react";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import "../css/SearchComp.css";
import { CiSearch } from "react-icons/ci";

export default function SearchComp() {
  return (
    <div
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        maxWidth: 600,
      }}
      id="searchBox"
    >
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        className="muiIcon py-0"
      >
        <CiSearch />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search for anything..."
        inputProps={{ "aria-label": "Search for anything..." }}
        disableTypography
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "14px",
          fontWeight: "400",
        }}
      />
    </div>
  );
}
