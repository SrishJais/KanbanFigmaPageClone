import {
  Avatar,
  AvatarGroup,
  Button,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import FilterSort from "../components/FilterSort";
import equalIcon from "../assets/icons/equalIcon.svg";
import inviteIcon from "../assets/icons/inviteIcon.svg";
import shareIcon from "../assets/icons/shareIcon.svg";
import equalRightIcon from "../assets/icons/equalRightIcon.svg";
import editIcon from "../assets/icons/editIcon.svg";
import linkIcon from "../assets/icons/linkIcon.svg";
import avatar1 from "../assets/photos/avatar1.png";
import avatar2 from "../assets/photos/avatar2.png";
import avatar3 from "../assets/photos/avatar3.png";
import avatar4 from "../assets/photos/avatar4.png";

//______________import  drag and drop start__________________
import TaskCol from "../components/TaskCol"; //columns
import { useState } from "react";
import { columnsFromBackend } from "../KanbanData";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
// ______________import for drag and drop end_________________

const MobileApp = () => {
  //______________JS  drag and drop start__________________
  const [columns, setColumns] = useState(columnsFromBackend);
  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };
  //______________JSX  drag and drop end__________________

  const bulletColor = ["#5030E5", "#FFA500", "#8BC48A"];

  return (
    <>
      {/* ____________ JSX  for drag drop*__________________  */}
      {/* wrap that data within whose context drag ,drop functionality is req to use like within all the 3 cols */}
      <DragDropContext
        onDragEnd={(result) => {
          onDragEnd(result, columns, setColumns);
        }}
      >
        {/* __________________JSX  for drag drop end*____________/}
      
        {/*_________________________________________heading section___________________________________________*/}

        <div className="row flexSpaceBtw mb-3">
          {/* left heading section */}
          <div className="col-md-5 d-flex align-items-center px-0">
            <Typography
              variant="h5"
              className="black pr-2"
              disableTypography
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "42px",
                fontWeight: "600",
              }}
            >
              Mobile App
            </Typography>
            <IconButton className="muiIcon pr-0">
              <img src={editIcon} alt="editIcon" />
            </IconButton>
            <IconButton className="muiIcon">
              <img src={linkIcon} alt="linkIcon" />
            </IconButton>
          </div>
          {/* right heading section */}
          <div className="col-md-4 d-flex align-items-center justify-content-end px-0">
            <img
              src={inviteIcon}
              alt="inviteIcon"
              className="pr-1"
              width="18px"
              height="18px"
            />
            <b
              className="align-self-center"
              disableTypography
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "16px",
                fontWeight: "500",
                color: "#5030E5",
              }}
            >
              Invite
            </b>
            {/* avatar group */}
            <AvatarGroup max={5} className="ml-1">
              <Avatar alt="Remy Sharp" src={avatar1} style={{ color: "red" }} />
              <Avatar alt="Travis Howard" src={avatar2} />
              <Avatar alt="Cindy Baker" src={avatar3} />
              <Avatar alt="Agnes Walker" src={avatar4} />
              <Avatar
                alt="Trevor Henderson"
                src="/static/images/avatar/5.jpg"
              />
              <Avatar
                alt="Trevor Henderson"
                src="/static/images/avatar/5.jpg"
              />
            </AvatarGroup>
          </div>
        </div>
        {/*_________________________________________Filter and sort___________________________________________*/}

        <div className="row flexSpaceBtw mt-3">
          <div className="col-md-5 px-0">
            <FilterSort />
          </div>

          {/* _________________________________________-Share ,btn right _____________________________________________*/}
          <div className="col-md-5 d-flex align-items-center justify-content-end px-0">
            {/* Share */}
            <div>
              <Button
                variant="outlined"
                style={{
                  textTransform: "none",
                  outline: "none",
                  borderColor: "grey",
                }}
              >
                <img src={shareIcon} alt="shareIcon" />
                <Typography
                  className="lightGrey pl-1"
                  disableTypography
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  Share
                </Typography>
              </Button>
            </div>
            <Divider
              orientation="vertical"
              variant="middle"
              style={{
                height: "28px",
                alignSelf: "center",
                fontWeight: "bold",
              }}
              flexItem
              className="mx-3"
            />
            <IconButton className="muiIcon pl-0">
              <img src={equalIcon} alt="equalIcon" />
            </IconButton>
            <IconButton className="muiIcon">
              <img src={equalRightIcon} alt="equalRightIcon" />
            </IconButton>
          </div>
        </div>
        {/*______________________________________________card sections______________________________________________ */}
        <div className="row flexSpaceBtw justify-content-evenly mt-3">
          {/* ___________________JSX  for drag drop_______________*/}

          {/* render multicolumn  */}
          {Object.entries(columns).map(([columnId, column], index) => (
            <Droppable key={index} droppableId={columnId}>
              {(provided, snapshot) => (
                <div
                  className="col-md-4 my-2"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{
                    borderRadius: "16px",
                    backgroundColor: "#F5F5F5",
                    maxWidth: "414px",
                  }}
                >
                  {/* Each column component */}
                  <TaskCol
                    column={column}
                    colBulletColor={bulletColor[index]}
                  />
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
      {/*____________________ JSX  for drag drop end_________________*/}
    </>
  );
};

export default MobileApp;
