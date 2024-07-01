"use client";
import AppConfig from "@/configurations/app.config";
import { Box, Fade } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function MainVisual() {
  const [imageNumber, setImageNumber] = useState(0);

  const images = [
    `${AppConfig.BASE_URL}/images/top-0.png`,
    `${AppConfig.BASE_URL}/images/top-1.png`,
    `${AppConfig.BASE_URL}/images/top-2.png`,
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (imageNumber === images.length - 1) {
        setImageNumber(0);
      } else {
        setImageNumber(imageNumber + 1);
      }
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [images.length, imageNumber]);

  return (
    <Box
      sx={{
        position: "relative",
        height: "auto",
        width: "100%",
        aspectRatio: 16 / 9,
      }}
    >
      {images.map((image, index) => {
        return (
          <Fade key={index} in={index === imageNumber}>
            <Image
              src={image}
              alt={`top ${index}`}
              height={720}
              width={1280}
              style={{ position: "absolute", height: "auto", width: "100%" }}
              loading="lazy"
            />
          </Fade>
        );
      })}
    </Box>
  );
}
