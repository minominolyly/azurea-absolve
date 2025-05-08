import { BasicContainer } from "@/components/BasicContainer";
import { MinolithLink } from "@/components/MinolithLink";
import RoutePath from "@/constants/RoutePath";
import AuthorizedLayout from "@/layouts/AuthorizedLayout";
import { Box, Breadcrumbs } from "@mui/material";
import { Metadata } from "next";
import { Breadcrumb, BreadcrumbsNav, Section } from "react-minolith";

const TITLE = "ギルドイベントのアイディア募集";

export const metadata: Metadata = {
  title: TITLE,
  openGraph: {
    title: TITLE,
  },
};

export default function IndexPage() {
  return (
    <AuthorizedLayout id={TITLE}>
      <BasicContainer>
        <Section spacing={{ padding: { y: 0.5 } }}>
          <BreadcrumbsNav>
            <Breadcrumbs>
              <Breadcrumb>
                <MinolithLink href={RoutePath.INDEX}>{"Top"}</MinolithLink>
              </Breadcrumb>
              <Breadcrumb>
                <MinolithLink href={RoutePath.SURVEY}>
                  {"アンケート"}
                </MinolithLink>
              </Breadcrumb>
              <Breadcrumb>{TITLE}</Breadcrumb>
            </Breadcrumbs>
          </BreadcrumbsNav>
        </Section>
        <section>
          <h1 style={{ color: "var(--minolith-color-yellow-50)" }}>{TITLE}</h1>
        </section>
        <section>
          <Box
            sx={{
              padding: "1rem 0",
              border: "solid 0.1rem var(--minolith-color-gray-30)",
            }}
          >
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfQr023PDs_yi8qlOQDHuz1eLaDZs_ZPH9-RvMUQQarNulPKg/viewform?embedded=true"
              width="640"
              height="640"
              style={{
                width: "100%",
                border: "none",
              }}
            >
              読み込んでいます…
            </iframe>
          </Box>
        </section>
      </BasicContainer>
    </AuthorizedLayout>
  );
}
