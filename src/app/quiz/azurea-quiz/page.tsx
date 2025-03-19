import AzureaQuizViewer from "@/components/AzureaQuizViewer";
import { BasicContainer } from "@/components/BasicContainer";
import { MinolithLink } from "@/components/MinolithLink";
import RoutePath from "@/constants/RoutePath";
import CommonLayout from "@/layouts/CommonLayout";
import { Info } from "@mui/icons-material";import { Alert, Box } from "@mui/material";
;
import { Metadata } from "next";
import { Section, BreadcrumbsNav, Breadcrumb, Breadcrumbs } from "react-minolith";

const TITLE = "アズレアクイズ";

export const metadata: Metadata = {
  title: TITLE,
  openGraph: {
    title: TITLE,
  },
};

export default function AzureaQuizPage() {
  return (
    <CommonLayout id={TITLE}>
      <BasicContainer>
        <Section spacing={{ padding: { y: 0.5 } }}>
          <BreadcrumbsNav>
            <Breadcrumbs>
              <Breadcrumb>
                <MinolithLink href={RoutePath.INDEX}>{"Top"}</MinolithLink>
              </Breadcrumb>
              <Breadcrumb>
                <MinolithLink href={RoutePath.QUIZ}>
                  {"クイズ"}
                </MinolithLink>
              </Breadcrumb>
              <Breadcrumb>{TITLE}</Breadcrumb>
            </Breadcrumbs>
          </BreadcrumbsNav>
        </Section>
        <section>
          <h1 style={{ color: "var(--color-yellow-50)" }}>{TITLE}</h1>
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
          <AzureaQuizViewer />
        </section>
      </BasicContainer>
    </CommonLayout>
  );
}
