import CommonLayout from "@/layouts/CommonLayout";
import { Alert, AlertTitle, Box, Container, Link } from "@mui/material";
import { Metadata } from "next";
import { Info } from "@mui/icons-material";
import MainVisual from "@/components/MainVisual";
import TweetsByAzurea from "@/components/TweetsByAzurea";

const TITLE = "Absolve@AZUREA-空の唄-";
const DESCRIPTION = "「AZUREA-空の唄-」のギルド「Absolve」のページです。";

export const metadata: Metadata = {
  title: TITLE,
  openGraph: {
    title: TITLE,
  },
};

export default function IndexPage() {
  const alertInfos = [
    {
      date: "2024-7-8",
      content: (
        <>
          {`ギルイベ7/16(火) 魂域のあともしくは霧隠れの後にやります。アンケご協力ありがとうございました。`}
        </>
      ),
    },
  ];
  return (
    <CommonLayout title={TITLE}>
      <Container className="container">
        <section>
          <h1>{""}</h1>
        </section>
        <Box sx={{ padding: "1rem 0" }}>
          <Alert
            variant="filled"
            severity={"info"}
            icon={<Info fontSize="inherit" />}
          >
            <AlertTitle>{"お知らせ"}</AlertTitle>
            <ul>
              {alertInfos.map((alertInfo, index) => {
                return (
                  <li key={index}>
                    <span
                      style={{ color: "var(--color-gray-40)" }}
                    >{`${alertInfo.date} :`}</span>
                    <span>{alertInfo.content}</span>
                  </li>
                );
              })}
            </ul>
          </Alert>
        </Box>
        <section>
          <MainVisual />
        </section>
        <section className="section-azurea-timeline">
          <Box sx={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
            <TweetsByAzurea />
          </Box>
        </section>
      </Container>
    </CommonLayout>
  );
}
