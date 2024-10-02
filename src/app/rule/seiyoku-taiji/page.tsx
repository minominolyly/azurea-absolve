import AppConfig from "@/configurations/app.config";
import CommonLayout from "@/layouts/CommonLayout";
import { Box, Container } from "@mui/material";
import { Metadata } from "next";
import Image from "next/image";

const TITLE = "聖翼退治";
const EYECATCH = `${AppConfig.BASE_URL}/images/rule/seiyoku-taiji/eyecatch.png`;

export const metadata: Metadata = {
  title: TITLE,
  openGraph: {
    title: TITLE,
    images: [EYECATCH],
  },
};

export default function RuleUnsuiHimePage() {
  return (
    <CommonLayout title={TITLE}>
      <Container className="container">
        <section>
          <h1 style={{ color: "var(--color-yellow-50)" }}>{TITLE}</h1>
          <Box
            sx={{
              paddingTop: "1rem",
              paddingBottom: "1rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src={EYECATCH}
              alt={`eyecatch`}
              height={720}
              width={1280}
              style={{
                height: "auto",
                width: "100%",
              }}
              loading="lazy"
            />
          </Box>
        </section>
        <section>
          <h2>
            <span style={{ color: "var(--color-yellow-50)" }}>{"概要"}</span>
          </h2>
          <ul>
            <li>{`専用中心鯖マップで実施されるワールドボス`}</li>
            <li>{`メインchとサブchが存在し、侵入は早いもの勝ち`}</li>
            <li>{`20:58頃から待機し、時計マークのイベントボタンがでたらすぐにメインchに移動する`}</li>
          </ul>
        </section>
      </Container>
    </CommonLayout>
  );
}
