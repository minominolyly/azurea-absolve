import QuizViewer from "@/components/QuizViewer";
import CommonLayout from "@/layouts/CommonLayout";
import { Info } from "@mui/icons-material";
import { Alert, Box, Container } from "@mui/material";
import { Metadata } from "next";

const TITLE = "クイズ";

export const metadata: Metadata = {
  title: TITLE,
  openGraph: {
    title: TITLE,
  },
};

export default function QuizPage() {
  return (
    <CommonLayout title={TITLE}>
      <Container className="container">
        <section>
          <h1>{"クイズ"}</h1>
        </section>
        <section>
          <Box sx={{ padding: "1rem 0" }}>
            <Alert
              variant="filled"
              severity={"info"}
              icon={<Info fontSize="inherit" />}
            >
              {"問題の追加や修正があれば会長まで！"}
            </Alert>
          </Box>
        </section>
        <section>
          <QuizViewer />
        </section>
      </Container>
    </CommonLayout>
  );
}
