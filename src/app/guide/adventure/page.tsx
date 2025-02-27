import { BasicContainer } from "@/components/BasicContainer";
import AppConfig from "@/configurations/app.config";
import RoutePath from "@/constants/RoutePath";
import CommonLayout from "@/layouts/CommonLayout";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from "@mui/material";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Centering, Heading, Section } from "react-minolith";

const TITLE = "冒険";
const EYECATCH = `${AppConfig.BASE_URL}/images/guide/adventure/eyecatch.png`;

export const metadata: Metadata = {
  title: TITLE,
  openGraph: {
    title: TITLE,
    images: [EYECATCH],
  },
};

export default function AdventureIndexPage() {
  return (
    <CommonLayout id={TITLE}>
      <BasicContainer>
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
          <List>
            <ListItem
              disablePadding={true}
              component={Link}
              href={RoutePath.GUIDE_ADVENTURE_FUUN_NO_KOKYUU}
            >
              <ListItemButton>
                <ListItemText primary="浮雲の狐宮" />
              </ListItemButton>
            </ListItem>
          </List>
        </section>
      </BasicContainer>
    </CommonLayout>
  );
}
