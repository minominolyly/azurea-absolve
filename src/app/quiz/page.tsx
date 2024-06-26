import QuizViewer from "@/components/QuizViewer";
import CommonLayout from "@/layouts/CommonLayout";
import { Container } from "@mui/material";
import { Metadata } from "next";

const TITLE = "クイズ";

export const metadata: Metadata = {
  title: TITLE,
};

export default function QuizPage() {
  return (
    <CommonLayout title={TITLE}>
      <Container className="container">
        <section>
          <h1>{"クイズ"}</h1>
        </section>
        <section>
          <QuizViewer />
        </section>
      </Container>
    </CommonLayout>
  );
}
