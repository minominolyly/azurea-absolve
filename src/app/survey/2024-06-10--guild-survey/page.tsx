import AppConfig from "@/configurations/app.config";
import CommonLayout from "@/layouts/CommonLayout";
import { Alert, AlertTitle, Box, Container, Link } from "@mui/material";
import Image from "next/image";
import { Metadata } from "next";
import { Info } from "@mui/icons-material";
import {
  Breadcrumb,
  Breadcrumbs,
  BreadcrumbsNav,
  Heading,
  Section,
} from "react-minolith";
import { BasicContainer } from "@/components/BasicContainer";
import { MinolithLink } from "@/components/MinolithLink";
import RoutePath from "@/constants/RoutePath";

const TITLE = "2024-06-10 ギルドアンケート";
const DESCRIPTION = "2024年06月10日度のギルドアンケートです。";
const EYECATCH = `${AppConfig.BASE_URL}/images/survey/eyecatch.png`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [EYECATCH],
  },
};

export default function IndexPage() {
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
                <MinolithLink href={RoutePath.SURVEY}>
                  {"アンケート"}
                </MinolithLink>
              </Breadcrumb>
              <Breadcrumb>{TITLE}</Breadcrumb>
            </Breadcrumbs>
          </BreadcrumbsNav>
        </Section>
        <section>
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
        </section>
        <section>
          <Box sx={{ padding: "1rem 0" }}>
            <Alert
              variant="filled"
              severity={"warning"}
              icon={<Info fontSize="inherit" />}
            >
              {"アンケートは終了しました。ご協力ありがとうございました。"}
            </Alert>
          </Box>
        </section>
        <section>
          <Box sx={{ padding: "1rem 0" }}>
            <div>
              <Heading
                level={2}
                fore={{
                  color: {
                    light: { default: { name: "yellow", lightness: 20 } },
                    dark: { default: { name: "yellow", lightness: 80 } },
                  },
                }}
              >
                {"結果"}
              </Heading>
            </div>
            <section>
              <Heading
                level={3}
                fore={{
                  color: {
                    light: { default: { name: "yellow", lightness: 20 } },
                    dark: { default: { name: "yellow", lightness: 80 } },
                  },
                }}
              >
                {"真空余燼の時間"}
              </Heading>
              <ul>
                <li>{"いまのままでいい（水曜日の21:45分開始）"}</li>
              </ul>
              <Image
                src={`${AppConfig.BASE_URL}/images/survey/2024-06-10--guild-survey/shinku-yojin.png`}
                alt={`真空余燼の時間`}
                height={720}
                width={1280}
                style={{ height: "auto", width: "100%" }}
                loading="lazy"
              />
            </section>
            <section>
              <Heading
                level={3}
                fore={{
                  color: {
                    light: { default: { name: "yellow", lightness: 20 } },
                    dark: { default: { name: "yellow", lightness: 80 } },
                  },
                }}
              >
                {"アイドルの時間"}
              </Heading>
              <ul>
                <li>{"いまのままでいい（金曜日の21:45分開始）"}</li>
              </ul>
              <Image
                src={`${AppConfig.BASE_URL}/images/survey/2024-06-10--guild-survey/idol.png`}
                alt={`アイドルの時間`}
                height={720}
                width={1280}
                style={{ height: "auto", width: "100%" }}
                loading="lazy"
              />
            </section>
            <section>
              <Heading
                level={3}
                fore={{
                  color: {
                    light: { default: { name: "yellow", lightness: 20 } },
                    dark: { default: { name: "yellow", lightness: 80 } },
                  },
                }}
              >
                {"もしギルドイベントをやるとしたら"}
              </Heading>
              <ul>
                <li>{"1.土曜日の領土戦のあと"}</li>
                <li>{"2.火曜日の魂域のあと（同票2位）"}</li>
                <li>{"2.木曜日の水着祭典のあと（同票2位）"}</li>
              </ul>
            </section>
            <section>
              <Heading
                level={3}
                fore={{
                  color: {
                    light: { default: { name: "yellow", lightness: 20 } },
                    dark: { default: { name: "yellow", lightness: 80 } },
                  },
                }}
              >
                {"レイドの管理者について"}
              </Heading>
              <ul>
                <li>
                  {
                    "管理者をやってもいいと言ってくださる方が20%います。たすかります！"
                  }
                </li>
              </ul>
              <Image
                src={`${AppConfig.BASE_URL}/images/survey/2024-06-10--guild-survey/raid-admin.png`}
                alt={`レイドの管理者について`}
                height={720}
                width={1280}
                style={{ height: "auto", width: "100%" }}
                loading="lazy"
              />
            </section>
            <section>
              <Heading
                level={3}
                fore={{
                  color: {
                    light: { default: { name: "yellow", lightness: 20 } },
                    dark: { default: { name: "yellow", lightness: 80 } },
                  },
                }}
              >
                {"レイドのパーティーについて（なにかあれば）"}
              </Heading>
              <ul>
                <li>{"基本、現状維持とします。"}</li>
              </ul>
            </section>
            <section>
              <Heading
                level={3}
                fore={{
                  color: {
                    light: { default: { name: "yellow", lightness: 20 } },
                    dark: { default: { name: "yellow", lightness: 80 } },
                  },
                }}
              >
                {"ギルド戦の作戦について（なにかあれば）"}
              </Heading>
              <ul>
                <li>{"基本、現状維持とします。"}</li>
              </ul>
            </section>
            <section>
              <Heading
                level={3}
                fore={{
                  color: {
                    light: { default: { name: "yellow", lightness: 20 } },
                    dark: { default: { name: "yellow", lightness: 80 } },
                  },
                }}
              >
                {"領土戦の作戦ついて（なにかあれば）"}
              </Heading>
              <ul>
                <li>{"基本、現状維持とします。"}</li>
              </ul>
            </section>
            <section>
              <Heading
                level={3}
                fore={{
                  color: {
                    light: { default: { name: "yellow", lightness: 20 } },
                    dark: { default: { name: "yellow", lightness: 80 } },
                  },
                }}
              >
                {"ディスコードの運用について（おもにVCについて）"}
              </Heading>
              <ul>
                <li>{"基本的にはVCは無しの方向とします"}</li>
              </ul>
            </section>
            <section>
              <Heading
                level={3}
                fore={{
                  color: {
                    light: { default: { name: "yellow", lightness: 20 } },
                    dark: { default: { name: "yellow", lightness: 80 } },
                  },
                }}
              >
                {"ディスコードの運用について（その他）"}
              </Heading>
              <ul>
                <li>
                  {"近い内にイベント通知のやつを停止します。"}
                  {
                    "多分通知がへるのでサーバー通知をオンにしてもいいかと思ってます。"
                  }
                </li>
              </ul>
            </section>
            <section>
              <Heading
                level={3}
                fore={{
                  color: {
                    light: { default: { name: "yellow", lightness: 20 } },
                    dark: { default: { name: "yellow", lightness: 80 } },
                  },
                }}
              >
                {"その他のご意見"}
              </Heading>
              <ul>
                <li>{"役職募集中！！"}</li>
              </ul>
            </section>
          </Box>
        </section>

        <section>
          <Box
            sx={{
              padding: "1rem 0",
              border: "solid 0.1rem var(--color-gray-30)",
            }}
          >
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScWwjg3KahlP4DwHlzD6fx5jzqaPzom7pbYqt8Ca_87BlwliA/viewform?embedded=true"
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
    </CommonLayout>
  );
}
