import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { AvatarGroup } from "@mui/material";
import horMoreIcon from "../assets/icons/horMoreIcon.svg";
import fileIcon from "../assets/icons/fileIcon.svg";
import commentIcon from "../assets/icons/commentIcon.svg";
import avatar1 from "../assets/photos/avatar1.png";
import avatar2 from "../assets/photos/avatar2.png";
import avatar3 from "../assets/photos/avatar3.png";
// import image1 from "../assets/contentImg/image1.png";

import "../css/Cards.css";

//______________import  drag and drop start__________________
import { Draggable } from "react-beautiful-dnd";
//______________import  drag and drop end__________________

export default function Cards({ item, index }) {
  let priorityClass;
  if (item.priority === "Low") priorityClass = "low";
  else if (item.priority === "High") priorityClass = "high";
  else priorityClass = "completed";

  return (
    // ___________________JSX  for drag drop start_______________

    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {/* ___________________JSX  for drag drop end_______________ */}

          <Card className="mb-3" key={item.id} id="card">
            {/* Card header */}
            <CardHeader
              avatar={
                <div className={`${priorityClass} px-2 py-1 priority`}>
                  <Typography
                    disableTypography
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    {item.priority}
                  </Typography>
                </div>
              }
              action={
                <IconButton aria-label="settings" className="muiIcon">
                  <img src={horMoreIcon} alt="horMoreIcon" />
                </IconButton>
              }
              className="pb-1"
            />
            {/* card content */}
            <CardContent className="py-0">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="mb-0 black"
                disableTypography
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                {item.title}
              </Typography>
            </CardContent>
            {item.imageUrl && (
              <CardMedia
                component="img"
                height="auto"
                image={item.imageUrl}
                className="my-1 px-3"
                alt="image"
              />
            )}
            <CardContent className="py-1">
              <Typography
                className="lightGrey"
                disableTypography
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  fontWeight: "400",
                }}
              >
                {item.content && item.content}
              </Typography>
            </CardContent>
            {/* card footer */}
            <CardActions className="flexSpaceBtw">
              <AvatarGroup max={3} className="ml-1">
                <Avatar
                  alt="Remy Sharp"
                  src={avatar1}
                  sx={{ width: 24, height: 24 }}
                />
                <Avatar
                  alt="Travis Howard"
                  src={avatar2}
                  sx={{ width: 24, height: 24 }}
                />
                <Avatar
                  alt="Cindy Baker"
                  src={avatar3}
                  sx={{ width: 24, height: 24 }}
                />
              </AvatarGroup>
              <div className="d-flex align-items-center ml-0">
                <img src={commentIcon} alt="commentIcon" className="px-1" />
                <Typography
                  className="pr-2 lightGrey"
                  disableTypography
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  {item.comments} comments
                </Typography>
                <img src={fileIcon} alt="fileIcon" className="px-1" />
                <Typography
                  className="pr-2 lightGrey"
                  disableTypography
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  {item.files} files
                </Typography>
              </div>
            </CardActions>
          </Card>
        </div>
      )}
    </Draggable>
  );
}
