import React, { useState } from "react";
import { Box, IconButton, MobileStepper } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import "./carousel.style.scss";

export default function Carousel() {
  const images = [
    "https://voobschem.ru/wp-content/uploads/2023/12/image1%D1%86%D1%83%D0%B0%D0%B2%D0%B0%D1%83%D0%BA-1.jpg",
    "https://tarif39.ru/wp-content/uploads/2024/10/roulette1-1024x683-1.webp",
    "https://ins-clinic.ru/upload/iblock/f93/f937d53fb1a305aa00386c11a8626064.jpg",
    "https://img.freepik.com/free-vector/realistic-casino-gambling-illustration_52683-99917.jpg?t=st=1736335753~exp=1736339353~hmac=b52d9d2d682ba5159f61eb62e245daa3fb14c261e13ef92aa5ae2fb211f588a5",
  ];

  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % images.length);
  };

  const handleBack = () => {
    setActiveStep((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Box className="carousel">
      <Box
        className="carousel__image"
        component="img"
        src={images[activeStep]}
        alt={`Huy`}
      />
      <MobileStepper
        className="carousel__stepper"
        variant="dots"
        steps={images.length}
        position="static"
        activeStep={activeStep}
        // sx={{ backgroundColor: "transparent" }}
        nextButton={
          <IconButton onClick={handleNext}>
            <KeyboardArrowRight />
          </IconButton>
        }
        backButton={
          <IconButton onClick={handleBack}>
            <KeyboardArrowLeft />
          </IconButton>
        }
      />
    </Box>
  );
}
