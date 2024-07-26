import CommonLayout from "@/layouts/CommonLayout";
import { Box, Container } from "@mui/material";
import { Metadata } from "next";

const TITLE = "ギルドイベントのアイディア募集";

export const metadata: Metadata = {
  title: TITLE,
  openGraph: {
    title: TITLE,
  },
};

export default function IndexPage() {
  return (
    <CommonLayout title={TITLE}>
      <Container className="container">
        <section>
          <h1 style={{ color: "var(--color-yellow-50)" }}>{TITLE}</h1>
        </section>
        <section>
          <Box
            sx={{
              padding: "1rem 0",
              border: "solid 0.1rem var(--color-gray-30)",
            }}
          >
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfQr023PDs_yi8qlOQDHuz1eLaDZs_ZPH9-RvMUQQarNulPKg/viewform?embedded=true"
              width="640"
              height="640"
              style={{
                width: "100%",
                border: "none"
              }}
            >
              読み込んでいます…
            </iframe>
          </Box>
        </section>
      </Container>
    </CommonLayout>
  );
}
