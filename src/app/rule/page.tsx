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

const TITLE = "ルール";

export const metadata: Metadata = {
  title: TITLE,
};

export default function RuleIndexPage() {
  return (
    <CommonLayout title={TITLE}>
      <Container className="container">
        <section>
          <h1>{"ルール"}</h1>
        </section>
        <section>
          <List>
            <ListItem
              disablePadding={true}
              component={Link}
              href={RoutePath.RULE_BASIC}
            >
              <ListItemButton>
                <ListItemText primary="基本ルール" />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding={true}
              component={Link}
              href={RoutePath.RULE_GVG}
            >
              <ListItemButton>
                <ListItemText primary="ギルド戦" />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding={true}
              component={Link}
              href={RoutePath.RULE_SHINKU_YOJIN}
            >
              <ListItemButton>
                <ListItemText primary="真空余燼" />
              </ListItemButton>
            </ListItem>
          </List>
        </section>
      </Container>
    </CommonLayout>
  );
}
