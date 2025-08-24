import * as React from "react";
import {
  Drawer,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box
} from "@mui/material";
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  HomeIcon,
  CasinoIcon,
  StarIcon,
  SupportIcon
} from "@mui/icons-material";
import HeaderLogo from "@components/Header/components/Logo";
import { useNavigate } from "react-router-dom";
import "./sidebar.style.scss";

export default function SimpleSliderBar() {
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const menuItems = [
    { text: "Главная", icon: <HomeIcon />, path: "/" },
    { text: "Игры", icon: <CasinoIcon />, path: "/games" },
    { text: "Акции", icon: <StarIcon />, path: "/promotions" },
    { text: "Поддержка", icon: <SupportIcon />, path: "/support" },
  ];

  return (
    <Box className="sliderBar">
      <Drawer
        variant="permanent"
        className={`drawer ${open ? "drawerOpen" : "drawerClosed"}`}
        classes={{
          paper: `drawerPaper ${open ? "paperOpen" : "paperClosed"}`
        }}
      >
        <HeaderLogo />
        <Divider />

        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} className="listItem">
              <ListItemButton
                onClick={() => navigate(item.path)}
                className={`listItemButton ${open ? "buttonOpen" : "buttonClosed"}`}
              >
                <ListItemIcon className={`listItemIcon ${open ? "iconOpen" : "iconClosed"}`}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  className={`listItemText ${open ? "textOpen" : "textClosed"}`}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        
        <div className="toggleButtonContainer">
          <IconButton onClick={handleDrawerToggle}>
            {open ? <ArrowBackIosNew /> : <ArrowForwardIos />}
          </IconButton>
        </div>
      </Drawer>
    </Box>
  );
}