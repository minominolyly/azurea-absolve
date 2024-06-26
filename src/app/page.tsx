import AppConfig from "@/configurations/app.config";
import CommonLayout from "@/layouts/CommonLayout";
import { Alert, AlertTitle, Box, Container, Link } from "@mui/material";
import Image from "next/image";
import { Metadata } from "next";
import { Info } from "@mui/icons-material";

const TITLE = "Absolve@AZUREA-空の唄-";

export const metadata: Metadata = {
  title: TITLE,
};

export default function IndexPage() {
  const alertInfos = [
    {
      date: "2024-6-26",
      content: (
        <>
          ギルイベ：みのサブ探しの
          <Link href="https://chouseisan.com/s?h=ec67b364d2674c68953307b64f391d24">
            日程調整アンケ
          </Link>
          です
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
        <Box sx={{padding: "1rem 0"}}>
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
          <Image
            src={`${AppConfig.BASE_URL}/images/gallery/1.png`}
            alt={`ss 1`}
            height={720}
            width={1280}
            style={{ height: "auto", width: "100%" }}
            loading="lazy"
          />
        </section>
      </Container>
    </CommonLayout>
  );
}
