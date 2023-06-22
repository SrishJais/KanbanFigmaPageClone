import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import taskIcon from "../assets/icons/taskIcon.svg";
import settingIcon from "../assets/icons/settingIcon.svg";
import msgIcon from "../assets/icons/msgIcon.svg";
import homeIcon from "../assets/icons/homeIcon.svg";
import membersIcon from "../assets/icons/membersIcon.svg";
import addIcon from "../assets/icons/addIcon.svg";
import drawerSwipIcon from "../assets/icons/drawerSwipIcon.svg";
import MyAppbar from "./MyAppbar";
import logo from "../assets/logo.png";
import "../css/SideDrawer.css";
import { NavLink, Outlet } from "react-router-dom";

const drawerWidth = 210;

function SideDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = (state) => {
    setMobileOpen(state);
  };
  const munuIconChoose = [
    <img src={homeIcon} alt="homeIcon" />,
    <img src={msgIcon} alt="msgIcon" />,
    <img src={taskIcon} alt="taskIcon" />,
    <img src={membersIcon} alt="membersIcon" />,
    <img src={settingIcon} alt="settingIcon" />,
  ];
  const bulletColor = ["#7AC555", "#FFA500", "#E4CCFD", "#76A5EA"];
  const topMenuUrl = ["/home", "/msg", "/tasks", "/members", "/settings"];
  const bottomMenuUrl = [
    "/mobileapp",
    "/websiteredesign",
    "/designsys",
    "/wireframes",
  ];

  const drawer = (
    <div id="drawer">
      {/* drawer header */}
      <Toolbar className="px-2 flexSpaceBtw">
        <div className="d-flex pl-2">
          <img src={logo} alt="logo" />
          <Typography
            className="pl-2 black"
            id="project_heading"
            disableTypography
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            Project M.
          </Typography>
        </div>
        {/* drawerSwipIcon */}
        <IconButton
          onClick={() => {
            handleDrawerToggle(false);
          }}
          className="muiIcon"
        >
          <img src={drawerSwipIcon} alt="drawerSwipIcon" />
        </IconButton>
      </Toolbar>
      <Divider />
      {/* Drawer top list  */}

      <List>
        {["Home", "Messages", "Tasks", "Members", "Settings"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                className="py-1"
                component={NavLink}
                to={topMenuUrl[index]}
              >
                <ListItemIcon style={{ minWidth: "34px" }}>
                  {munuIconChoose[index]}
                </ListItemIcon>
                <ListItemText
                  disableTypography
                  primary={text}
                  className="lightGrey"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Divider className="mb-3" />
      <div className="flexSpaceBtw align-items-center px-3">
        <Typography
          disableTypography
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "12px",
            fontWeight: "700",
            color: "rgba(120, 116, 134, 1)",
          }}
        >
          MY PROJECTS
        </Typography>

        <IconButton className="muiIcon">
          <img src={addIcon} alt="addIcon" width="16px" height="16px" />
        </IconButton>
      </div>
      {/* drawer project list */}
      <List>
        {["Mobile App", "Website Redesign", "Design System", "Wireframes"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                className="py-1"
                component={NavLink}
                to={bottomMenuUrl[index]}
              >
                <ListItemIcon style={{ minWidth: "34px" }}>
                  <span
                    style={{ color: `${bulletColor[index]}`, fontSize: "25px" }}
                  >
                    &#8226;
                  </span>
                </ListItemIcon>
                <ListItemText
                  disableTypography
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                  primary={text}
                  className="lightGrey bottomMenu"
                />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <MyAppbar handleDrawerToggleState={handleDrawerToggle} />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

SideDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SideDrawer;
