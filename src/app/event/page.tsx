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
import Image from "next/image";
import Link from "next/link";

const TITLE = "イベント";
const EYECATCH = `${AppConfig.BASE_URL}/images/event/eyecatch.png`;

export const metadata: Metadata = {
  title: TITLE,
  openGraph: {
    title: TITLE,
    images: [EYECATCH],
  },
};

export default function RuleIndexPage() {
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
              justifyContent: "center"
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
              href={RoutePath.EVENT_SEARCH_AND_REPORT}
            >
              <ListItemButton>
                <ListItemText primary="みのサブさがし！" />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding={true}
              component={Link}
              href={RoutePath.EVENT_QUIZ_BATTLE}
            >
              <ListItemButton>
                <ListItemText primary="クイズバトル！" />
              </ListItemButton>
            </ListItem>
          </List>
        </section>
      </Container>
    </CommonLayout>
  );
}
