import ImageGallery from "@/components/ImageGallery";
import AppConfig from "@/configurations/app.config";
import CommonLayout from "@/layouts/CommonLayout";
import { Container } from "@mui/material";
import { Metadata } from "next";

const TITLE = "Gallery";

export const metadata: Metadata = {
  title: TITLE,
};

export default function GalleryPage() {

  const images = [
    `${AppConfig.BASE_URL}/images/gallery/0.png`,
    `${AppConfig.BASE_URL}/images/gallery/1.png`,
    `${AppConfig.BASE_URL}/images/gallery/2.png`,
    `${AppConfig.BASE_URL}/images/gallery/3.png`,
  ];

  return (
    <CommonLayout title={TITLE}>
      <Container className="container">
        <section>
          <h1>{"Gallery"}</h1>
        </section>
        <section>
          <ImageGallery images={images} />
        </section>
      </Container>
    </CommonLayout>
  );
}
