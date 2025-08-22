import "./main.style.scss";
import SlideBar from "@components/Sidebar/index.tsx";
import { Box } from "@mui/material";
import AppRoutes from "../../routes/Routes";

export default function Main() {
  return (
    <Box className="main">
      <SlideBar />
      <Box className="main__content" component="main">
        <AppRoutes />
      </Box>
    </Box>
  );
}
