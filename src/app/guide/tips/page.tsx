import { BasicContainer } from "@/components/BasicContainer";
import { MinolithLink } from "@/components/MinolithLink";
import TipsHowToRead from "@/components/TipsHowToRead";
import RoutePath from "@/constants/RoutePath";
import CommonLayout from "@/layouts/CommonLayout";
import { Metadata } from "next";
import { Section, BreadcrumbsNav, Breadcrumbs, Breadcrumb } from "react-minolith";

const TITLE = "マメ知識";

export const metadata: Metadata = {
  title: TITLE,
  openGraph: {
    title: TITLE,
  },
};

export default function GuideTipsPage() {
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
                <MinolithLink href={RoutePath.GUIDE}>
                  {"ガイド"}
                </MinolithLink>
              </Breadcrumb>
              <Breadcrumb>{TITLE}</Breadcrumb>
            </Breadcrumbs>
          </BreadcrumbsNav>
        </Section>
        <section>
          <h1 style={{ color: "var(--color-yellow-50)" }}>{"マメ知識"}</h1>
        </section>
        <section>
          <h2>
            <span>読み方</span>
          </h2>
          <TipsHowToRead />
        </section>
      </BasicContainer>
    </CommonLayout>
  );
}
