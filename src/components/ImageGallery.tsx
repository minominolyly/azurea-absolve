"use client";
import { Box, ImageList, ImageListItem, Modal } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function ImageGallery(props: ImageGalleryProps) {
  const [modalImage, setModalImage] = useState("");

  return (
    <Box>
      <ImageList variant="masonry" cols={3} gap={8}>
        {props.images.map((image, index) => {
          return (
            <ImageListItem key={`ss-${index}`}>
              <Image
                src={image.image}
                alt={image.alt ? image.alt : `ss-${index}`}
                height={720}
                width={1280}
                style={{ height: "auto", width: "100%" }}
                loading="lazy"
                onClick={() => {
                  setModalImage(image.image);
                }}
              />
            </ImageListItem>
          );
        })}
      </ImageList>
      <Modal
        open={modalImage !== ""}
        onClose={() => {
          setModalImage("");
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: "auto",
            width: "100%",
            maxWidth: "1200px",
            padding: "0.5rem",
            margin: "0 auto",
            border: "0",
          }}
        >
          <Image
            src={modalImage}
            alt={`image`}
            height={720}
            width={1280}
            style={{ height: "auto", width: "100%", border: "0" }}
            loading="lazy"
          />
        </Box>
      </Modal>
    </Box>
  );
}

interface ImageGalleryProps {
  images: { image: string; alt: string }[];
}
