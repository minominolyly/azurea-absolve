import ImageGallery from "@/components/ImageGallery";
import AppConfig from "@/configurations/app.config";
import CommonLayout from "@/layouts/CommonLayout";
import { Info } from "@mui/icons-material";
import { Alert, Box, Container } from "@mui/material";
import { Metadata } from "next";

const TITLE = "Gallery";

export const metadata: Metadata = {
  title: TITLE,
};

const images = [
  {
    image: `${AppConfig.BASE_URL}/images/gallery/0.png`,
    alt: "",
  },
  {
    image: `${AppConfig.BASE_URL}/images/gallery/1.png`,
    alt: "",
  },
  {
    image: `${AppConfig.BASE_URL}/images/gallery/2.png`,

    alt: "",
  },
  {
    image: `${AppConfig.BASE_URL}/images/gallery/3.png`,
    alt: "",
  },
  {
    image: `${AppConfig.BASE_URL}/images/gallery/4.jpg`,
    alt: "",
  },
  {
    image: `${AppConfig.BASE_URL}/images/gallery/5.webp`,
    alt: "",
  },
  {
    image: `${AppConfig.BASE_URL}/images/gallery/6.webp`,
    alt: "",
  },
  {
    image: `${AppConfig.BASE_URL}/images/gallery/7.webp`,
    alt: "",
  },
  {
    image: `${AppConfig.BASE_URL}/images/gallery/8.webp`,
    alt: "",
  },
  {
    image: `${AppConfig.BASE_URL}/images/gallery/9.png`,
    alt: "",
  },
  {
    image: `${AppConfig.BASE_URL}/images/gallery/10.png`,
    alt: "",
  },
  {
    image: `${AppConfig.BASE_URL}/images/gallery/11.png`,
    alt: "最強…？",
  },
  {
    image: `${AppConfig.BASE_URL}/images/gallery/12.png`,
    alt: "",
  },
  {
    image: `${AppConfig.BASE_URL}/images/gallery/13.png`,
    alt: "え～んやこ～ら",
  },
  {
    image: `${AppConfig.BASE_URL}/images/gallery/14.png`,
    alt: "",
  },
  {
    image: `${AppConfig.BASE_URL}/images/gallery/15.png`,
    alt: "ぴ！",
  },
  {
    image: `${AppConfig.BASE_URL}/images/gallery/16.png`,
    alt: "",
  },
  {
    image: `${AppConfig.BASE_URL}/images/gallery/17.png`,
    alt: "",
  },
  {
    image: `${AppConfig.BASE_URL}/images/gallery/18.png`,
    alt: "",
  },
  {
    image: `${AppConfig.BASE_URL}/images/gallery/19.png`,
    alt: "",
  },
  {
    image: `${AppConfig.BASE_URL}/images/gallery/20.png`,
    alt: "",
  },
  {
    image: `${AppConfig.BASE_URL}/images/gallery/21.png`,
    alt: "",
  },
  {
    image: `${AppConfig.BASE_URL}/images/gallery/22.png`,
    alt: "",
  },
  {
    image: `${AppConfig.BASE_URL}/images/gallery/23.png`,
    alt: "",
  },
  {
    image: `${AppConfig.BASE_URL}/images/gallery/24.png`,
    alt: "",
  },
  {
    image: `${AppConfig.BASE_URL}/images/gallery/25.png`,
    alt: "うさぎのようななにか",
  },
  {
    image: `${AppConfig.BASE_URL}/images/gallery/26.png`,
    alt: "熾天使",
  },
  {
    image: `${AppConfig.BASE_URL}/images/gallery/27.png`,
    alt: "",
  },
  {
    image: `${AppConfig.BASE_URL}/images/gallery/28.png`,
    alt: "",
  },
  {
    image: `${AppConfig.BASE_URL}/images/gallery/29.png`,
    alt: "",
  },
  {
    image: `${AppConfig.BASE_URL}/images/gallery/30.png`,
    alt: "",
  },
  {
    image: `${AppConfig.BASE_URL}/images/gallery/31.png`,
    alt: "",
  },
  {
    image: `${AppConfig.BASE_URL}/images/gallery/32.png`,
    alt: "",
  },
  {
    image: `${AppConfig.BASE_URL}/images/gallery/33.png`,
    alt: "樹妖",
  },
  {
    image: `${AppConfig.BASE_URL}/images/gallery/34.png`,
    alt: "初代会長と黒蝶",
  },
  {
    image: `${AppConfig.BASE_URL}/images/gallery/35.png`,
    alt: "お猿さーん",
  },
  {
    image: `${AppConfig.BASE_URL}/images/gallery/36.png`,
    alt: "キラキラハロウィンスキン",
  },
  {
    image: `${AppConfig.BASE_URL}/images/gallery/37.png`,
    alt: "月宮仮面",
  },
];

export default function GalleryPage() {
  return (
    <CommonLayout title={TITLE}>
      <Container className="container">
        <section>
          <h1>{"Gallery"}</h1>
        </section>
        <section>
          <Box sx={{ padding: "1rem 0" }}>
            <Alert
              variant="filled"
              severity={"info"}
              icon={<Info fontSize="inherit" />}
            >
              {"掲載希望等ありましたら会長まで！"}
            </Alert>
          </Box>
        </section>
        <section>
          <ImageGallery images={images} />
        </section>
      </Container>
    </CommonLayout>
  );
}
