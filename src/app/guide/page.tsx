import RoutePath from "@/constants/RoutePath";
import CommonLayout from "@/layouts/CommonLayout";
import {
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Metadata } from "next";
import Link from "next/link";

const TITLE = "ガイド";

export const metadata: Metadata = {
  title: TITLE,
  openGraph: {
    title: TITLE,
  },
};

export default function GuideIndexPage() {
  return (
    <CommonLayout title={TITLE}>
      <Container className="container">
        <section>
          <h1>{"ガイド"}</h1>
        </section>
        <section>
          <List>
            <ListItem
              disablePadding={true}
              component={Link}
              href={RoutePath.GUIDE_TIPS}
            >
              <ListItemButton>
                <ListItemText primary="マメ知識" />
              </ListItemButton>
            </ListItem>
          </List>
        </section>
      </Container>
    </CommonLayout>
  );
}
