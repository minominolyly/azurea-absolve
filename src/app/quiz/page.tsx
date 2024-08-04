import AppConfig from "@/configurations/app.config";
import RoutePath from "@/constants/RoutePath";
import CommonLayout from "@/layouts/CommonLayout";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from "@mui/material";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const TITLE = "クイズ";
const EYECATCH = `${AppConfig.BASE_URL}/images/quiz/eyecatch.png`;

export const metadata: Metadata = {
  title: TITLE,
  openGraph: {
    title: TITLE,
    images: [EYECATCH],
  },
};

export default function QuizPage() {
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
              href={RoutePath.QUIZ_AZUREA_QUIZ}
            >
              <ListItemButton>
                <ListItemText primary="アズレアクイズ" />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding={true}
              component={Link}
              href={RoutePath.QUIZ_QUIZ_BATTLE_QUIZ}
            >
              <ListItemButton>
                <ListItemText primary="クイズバトルのクイズ" />
              </ListItemButton>
            </ListItem>
          </List>
        </section>
      </Container>
    </CommonLayout>
  );
}
