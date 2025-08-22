import "./main.style.scss";
import SlideBar from "@components/Sidebar/index.tsx";
import { Box } from "@mui/material";
import AppRoutes from "../../routes/Routes";
import Carousel from "@components/Carousel/index.tsx";

export default function Main() {
  return (
    <Box sx={{ display: "flex", minHeight: "calc(100vh - 70px)" }}>
      <SlideBar />
      <Carousel />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: "20px", // Отступ равный ширине слайдбара
          width: "calc(100% - 240px)",
        }}
      >
        <AppRoutes />
      </Box>
    </Box>
  );
}
