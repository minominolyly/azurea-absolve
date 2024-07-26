import AppConfig from "@/configurations/app.config";
import RoutePath from "@/constants/RoutePath";
import CommonLayout from "@/layouts/CommonLayout";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

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
    <CommonLayout title={TITLE}>
      <Container className="container">
        <section>
          <h1 style={{ color: "var(--color-yellow-50)" }}>{TITLE}</h1>
          <Box
            sx={{
              paddingTop: "1rem",
              paddingBottom: "1rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
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
          </Box>
        </section>
        <section>
          <List>
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
        </section>
      </Container>
    </CommonLayout>
  );
}
