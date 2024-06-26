import CommonLayout from "@/layouts/CommonLayout";
import { Container } from "@mui/material";
import { Metadata } from "next";

const TITLE = "ギルド戦";

export const metadata: Metadata = {
  title: TITLE,
};

export default function RuleGvGPage() {
  return (
    <CommonLayout title={TITLE}>
      <Container className="container">
        <section>
          <h1>{"ギルド戦"}</h1>
        </section>
        <section>
          {"作成中"}
        </section>
      </Container>
    </CommonLayout>
  );
}
