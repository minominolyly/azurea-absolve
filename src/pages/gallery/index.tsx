import AppConfig from "@/configurations/app.config";
import CommonLayout from "@/layouts/CommonLayout";
import { Box, Container, ImageList, ImageListItem, Modal } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function GalleryPage() {

  const images = [
    `${AppConfig.BASE_URL}/images/ss-0.png`,
    `${AppConfig.BASE_URL}/images/ss-1.png`,
    `${AppConfig.BASE_URL}/images/ss-2.png`,
  ];

  const [modalImage, setModalImage] = useState("");

  return (
    <CommonLayout title="Gallery / Absolve@海神の眼.AZUREA-空の唄-">
      <Container>
        <section>
          <h1>{"Gallery"}</h1>
        </section>
        <section>
          <ImageList variant="masonry" cols={3} gap={8}>
            {images.map((image, index) => {
              return (
                <ImageListItem key={`ss-${index}`}>
                  <Image
                    src={image}
                    alt={`ss ${index}`}
                    height={720}
                    width={1280}
                    style={{ height: "auto", width: "100%" }}
                    loading="lazy"
                    onClick={() => {
                      setModalImage(image);
                    }}
                  />
                </ImageListItem>
              );
            })}
          </ImageList>
        </section>
      </Container>
      <Modal
        open={modalImage !== ""}
        onClose={() => {
          setModalImage("");
        }}
      >
        <Box sx ={
          {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: "auto",
            width: "100%",
            maxWidth: "1200px",
            padding: "0.5rem",
            margin: "0 auto",
            border: "0"
          }
        }>
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
    </CommonLayout>
  );
}
