import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import "../css/MyAppbar.css";
import SearchComp from "./SearchComp";
import profile from "../assets/photos/profile.png";
import calendar2Icon from "../assets/icons/calendar2Icon.svg";
import notificationIcon from "../assets/icons/notificationIcon.svg";
import msgQuesIcon from "../assets/icons/msgQuesIcon.svg";

const drawerWidth = 210;

export default function MyAppbar({ handleDrawerToggleState }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id="primary-search-account-menu"
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Avatar sx={{ width: 20, height: 20 }} className="mr-3" /> Profile
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Avatar sx={{ width: 20, height: 20 }} className="mr-3" /> My account
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <PersonAdd fontSize="small" />
        </ListItemIcon>
        Add another account
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton className="muiIcon">
          <MailIcon />
        </IconButton>
        <p className="mb-0">Email</p>
      </MenuItem>

      <MenuItem>
        <IconButton className="muiIcon">
          <NotificationsIcon />
        </IconButton>
        <p className="mb-0">Notifications</p>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          className="muiIcon"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
        >
          <AccountCircle />
        </IconButton>
        <p className="mb-0">Profile</p>
      </MenuItem>
    </Menu>
  );
  //________________________________________________________________JSX start______________________________________________________
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        id="appbar"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            onClick={() => {
              handleDrawerToggleState(true);
            }}
            sx={{ mr: 2, display: { sm: "none" } }}
            className="muiIcon"
          >
            <MenuIcon />
          </IconButton>
          {/*______________________________________ Search component_____________________________ */}
          <SearchComp />

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <img src={calendar2Icon} alt="calendar2Icon" className="px-2" />
            <img src={msgQuesIcon} alt="msgQuesIcon" className="px-2" />
            <img
              src={notificationIcon}
              alt="notificationIcon"
              className="px-2"
            />
            {/*_________________________profile section____________________________________ */}

            <div
              className="text-right px-4 black"
              disableTypography
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              <b>Anima Agarwal</b>
              <div
                className="lightGrey"
                disableTypography
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                U.P,India
              </div>
            </div>
            <Avatar
              className="align-self-center "
              alt="Anima Agarwal"
              src={profile}
            />
            <IconButton className="muiIcon" onClick={handleProfileMenuOpen}>
              <KeyboardArrowDownOutlinedIcon />
            </IconButton>
          </Box>

          {/*______________________More btn in less screen width________________________________ */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              className="muiIcon"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
        <Divider />
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
