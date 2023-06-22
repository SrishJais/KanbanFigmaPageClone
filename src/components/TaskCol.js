import React from "react";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { Divider, IconButton, Typography } from "@mui/material";
import Cards from "./Cards";
import addTodoIcon from "../assets/icons/addTodoIcon.svg";

const TaskCol = ({ column, colBulletColor }) => {
  return (
    <>
      {/* card section header */}
      <div className="flexSpaceBtw pt-1">
        <div className="d-flex  align-items-center">
          {/* bullet symbol  */}
          <span style={{ color: colBulletColor, fontSize: "25px" }}>
            &#8226;
          </span>
          {/* card section heading */}
          <Typography>
            <b
              className="mx-2"
              disableTypography
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              {column.title}
            </b>
          </Typography>
        </div>
        {column.title === "To Do" ? (
          <IconButton className="muiIcon pr-0">
            <img src={addTodoIcon} alt="addTodoIcon" />
          </IconButton>
        ) : (
          ""
        )}
      </div>

      <Divider
        className="mt-1 mb-4"
        style={{ backgroundColor: colBulletColor, height: "3px" }}
      />
      {/* Rendiring each card item */}
      {column.items.map((val, index) => (
        <Cards key={index} item={val} index={index} />
      ))}
    </>
  );
};

export default TaskCol;
