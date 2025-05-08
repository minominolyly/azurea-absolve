import { BasicContainer } from "@/components/BasicContainer";
import { MinolithLink } from "@/components/MinolithLink";
import AppConfig from "@/configurations/app.config";
import RoutePath from "@/constants/RoutePath";
import AuthorizedLayout from "@/layouts/AuthorizedLayout";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Breadcrumb,
  Breadcrumbs,
  BreadcrumbsNav,
  Centering,
  Heading,
  Section,
} from "react-minolith";

const TITLE = "アンケート";
const EYECATCH = `${AppConfig.BASE_URL}/images/survey/eyecatch.png`;

export const metadata: Metadata = {
  title: TITLE,
  openGraph: {
    title: TITLE,
    images: [EYECATCH],
  },
};

export default function SurveyIndexPage() {
  return (
    <AuthorizedLayout id={TITLE}>
      <BasicContainer>
        <Section spacing={{ padding: { y: 0.5 } }}>
          <BreadcrumbsNav>
            <Breadcrumbs>
              <Breadcrumb>
                <MinolithLink href={RoutePath.INDEX}>{"Top"}</MinolithLink>
              </Breadcrumb>
              <Breadcrumb>{TITLE}</Breadcrumb>
            </Breadcrumbs>
          </BreadcrumbsNav>
        </Section>
        <Section spacing={{ padding: { bottom: 1 } }}>
          <Heading level={1} style={{ color: "var(--minolith-color-yellow-50)" }}>
            {TITLE}
          </Heading>
        </Section>
        <Section spacing={{ padding: { bottom: 1 } }}>
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
        <Section>
          <List>
            <ListItem
              disablePadding={true}
              component={Link}
              href={RoutePath.SURVEY_2025_05_08_GUILD_SURVEY}
            >
              <ListItemButton>
                <ListItemText primary="2025-05-08 ギルドアンケート" />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding={true}
              component={Link}
              href={RoutePath.SURVEY_2025_02_28_GUILD_SURVEY}
            >
              <ListItemButton>
                <ListItemText primary="2025-02-28 ギルドアンケート" />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding={true}
              component={Link}
              href={RoutePath.SURVEY_2024_06_10_GUILD_SURVEY}
            >
              <ListItemButton>
                <ListItemText primary="2024-06-10 ギルドアンケート" />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding={true}
              component={Link}
              href={RoutePath.SURVEY_2024_07_26_GUILD_EVENT_IDEA}
            >
              <ListItemButton>
                <ListItemText primary="ギルドイベントのアイディア募集" />
              </ListItemButton>
            </ListItem>
          </List>
        </Section>
      </BasicContainer>
    </AuthorizedLayout>
  );
}
