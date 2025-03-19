import QuizBattleQuizViewer from "@/components/QuizBattleQuizViewer";
import CommonLayout from "@/layouts/CommonLayout";
import { Container } from "@mui/material";
import { Metadata } from "next";
import { Section, Heading, Centering, Breadcrumb, Breadcrumbs, BreadcrumbsNav } from "react-minolith";
import Image from "next/image";
import AppConfig from "@/configurations/app.config";
import { BasicContainer } from "@/components/BasicContainer";
import { MinolithLink } from "@/components/MinolithLink";
import RoutePath from "@/constants/RoutePath";

const TITLE = "クイズバトルのクイズ";
const EYECATCH = `${AppConfig.BASE_URL}/images/quiz/eyecatch.png`;

export const metadata: Metadata = {
  title: TITLE,
  openGraph: {
    title: TITLE,
  },
};

export default function QuizBattleQuizPage() {
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
        <Section>
          <Heading
            level={1}
            fore={{
              color: {
                light: { default: { name: "yellow", lightness: 20 } },
                dark: { default: { name: "yellow", lightness: 80 } },
              },
            }}
          >
            {TITLE}
          </Heading>
        </Section>
        <Section>
          <Centering>
            <Image
              src={EYECATCH}
              alt={`eyecatch`}
              height={720}
              width={1280}
              style={{
                height: "auto",
                width: "100%",
              }}
              loading="lazy"
            />
          </Centering>
        </Section>
        <section>
          <QuizBattleQuizViewer />
        </section>
      </BasicContainer>
    </CommonLayout>
  );
}
