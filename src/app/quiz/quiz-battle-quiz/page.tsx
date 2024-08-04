import QuizBattleQuizViewer from "@/components/QuizBattleQuizViewer";
import CommonLayout from "@/layouts/CommonLayout";
import { Container } from "@mui/material";
import { Metadata } from "next";

const TITLE = "クイズバトルのクイズ";

export const metadata: Metadata = {
  title: TITLE,
  openGraph: {
    title: TITLE,
  },
};

export default function QuizBattleQuizPage() {
  return (
    <CommonLayout title={TITLE}>
      <Container className="container">
        <section>
          <h1 style={{ color: "var(--color-yellow-50)" }}>{TITLE}</h1>
        </section>
        <section>
          <QuizBattleQuizViewer />
        </section>
      </Container>
    </CommonLayout>
  );
}
