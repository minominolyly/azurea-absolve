import MainVisual from "@/components/MainVisual";
import TweetsByAzurea from "@/components/TweetsByAzurea";
import RoutePath from "@/constants/RoutePath";
import CommonLayout from "@/layouts/CommonLayout";
import { Info } from "@mui/icons-material";
import { Alert, AlertTitle, Box, Container } from "@mui/material";
import { Metadata } from "next";
import Link from "next/link";

interface AlertInfo {
  date: string;
  content: React.ReactNode;
}

const TITLE = "Absolve@AZUREA-空の唄-";
const DESCRIPTION = "「AZUREA-空の唄-」のギルド「Absolve」のページです。";

export const metadata: Metadata = {
  title: TITLE,
  openGraph: {
    title: TITLE,
  },
};

export default function IndexPage() {
  const alertInfos: AlertInfo[] = [
    {
      date: "2024-08-04",
      content: (
        <>
          {"ギルイベ：クイズバトルの"}
          <a
            href={"https://chouseisan.com/s?h=40a6d00e97d04ea2b74e08eafd8d7b2a"}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            {"調整さん"}
          </a>
          {"です。"}
        </>
      ),
    },
    {
      date: "2024-08-04",
      content: (
        <>
          {"ギルイベ：クイズバトルの"}
          <Link href={RoutePath.EVENT_QUIZ_BATTLE} className="link">
            {"ルール説明"}
          </Link>
          {"です。"}
        </>
      ),
    },
    {
      date: "2024-07-26",
      content: (
        <>
          {`ギルドイベントのアイディア募集をしています。回答は`}
          <a
            href={"https://forms.gle/MceiKtuJSANtkfqP8"}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >{`こちら`}</a>
          {`。`}
        </>
      ),
    },
  ];

  return (
    <CommonLayout title={TITLE}>
      <Container className="container">
        <section>
          <h1 style={{ color: "var(--color-yellow-50)" }}>{""}</h1>
        </section>
        {alertInfos.length > 0 && (
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
                        style={{ color: "var(--color-gray-70)" }}
                      >{`${alertInfo.date} :`}</span>
                      <span>{alertInfo.content}</span>
                    </li>
                  );
                })}
              </ul>
            </Alert>
          </Box>
        )}
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
