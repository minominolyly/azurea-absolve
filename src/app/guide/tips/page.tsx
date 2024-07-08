import TipsHowToRead from "@/components/TipsHowToRead";
import CommonLayout from "@/layouts/CommonLayout";
import { Container, Grid } from "@mui/material";
import { Metadata } from "next";

const TITLE = "マメ知識";

export const metadata: Metadata = {
  title: TITLE,
  openGraph: {
    title: TITLE,
  },
};

export default function GuideTipsPage() {
  return (
    <CommonLayout title={TITLE}>
      <Container className="container">
        <section>
          <h1>{"マメ知識"}</h1>
        </section>
        <section>
          <h2>
            <span>読み方</span>
          </h2>
          <TipsHowToRead />
        </section>
      </Container>
    </CommonLayout>
  );
}
