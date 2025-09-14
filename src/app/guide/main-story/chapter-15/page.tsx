import AzureaCoordinate from "@/components/AzureaCoordinate";
import { BasicContainer } from "@/components/BasicContainer";
import MinolithLink from "@/components/MinolithLink/MinolithLink";
import AppConfig from "@/configurations/app.config";
import RoutePath from "@/constants/RoutePath";
import CommonLayout from "@/layouts/CommonLayout";
import { Metadata } from "next";
import Image from "next/image";
import {
  Breadcrumb,
  Breadcrumbs,
  BreadcrumbsNav,
  Centering,
  Div,
  Heading,
  Paragraph,
  Section,
} from "react-minolith";

const TITLE = "メインストーリー 第15章";
const EYECATCH = `${AppConfig.BASE_URL}/images/guide/main-story/chapter-15/eyecatch.png`;

export const metadata: Metadata = {
  title: TITLE,
  openGraph: {
    title: TITLE,
    images: [EYECATCH],
  },
};

export default function MainStoryChapter15IndexPage() {
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
                <MinolithLink href={RoutePath.GUIDE}>{"ガイド"}</MinolithLink>
              </Breadcrumb>
              <Breadcrumb>
                <MinolithLink href={RoutePath.GUIDE_MAIN_STORY}>
                  {"メインストーリー"}
                </MinolithLink>
              </Breadcrumb>
              <Breadcrumb>{TITLE}</Breadcrumb>
            </Breadcrumbs>
          </BreadcrumbsNav>
        </Section>
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
        <Section>
          <Heading
            level={2}
            fore={{
              color: {
                light: { default: { name: "yellow", lightness: 20 } },
                dark: { default: { name: "yellow", lightness: 80 } },
              },
            }}
            spacing={{ padding: { y: 0.5 } }}
          >
            {"15章隠しエンドに必要な雪花結晶の場所"}
          </Heading>
          <Div spacing={{ padding: { y: 0.5 } }}>
            <Heading
              level={3}
              fore={{
                color: {
                  light: { default: { name: "yellow", lightness: 20 } },
                  dark: { default: { name: "yellow", lightness: 80 } },
                },
              }}
              spacing={{ padding: { y: 0.5 } }}
            >
              {"1つめ"}
            </Heading>
            <Paragraph>{"15章のタイトルがでてすぐ"}</Paragraph>
            <Div spacing={{ padding: { y: 0.5 } }}>
              <AzureaCoordinate area="盈霊郡" x={2457} y={2426} />
            </Div>
            <Centering>
              <Image
                src={`${AppConfig.BASE_URL}/images/guide/main-story/chapter-15/15-1.png`}
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
          </Div>
          <Div spacing={{ padding: { y: 0.5 } }}>
            <Heading
              level={3}
              fore={{
                color: {
                  light: { default: { name: "yellow", lightness: 20 } },
                  dark: { default: { name: "yellow", lightness: 80 } },
                },
              }}
              spacing={{ padding: { y: 0.5 } }}
            >
              {"2つめ"}
            </Heading>
            <Paragraph>{"散策のタイミング"}</Paragraph>
            <Div spacing={{ padding: { y: 0.5 } }}>
              <AzureaCoordinate area="盈霊郡" x={2439} y={2318} />
            </Div>
            <Centering>
              <Image
                src={`${AppConfig.BASE_URL}/images/guide/main-story/chapter-15/15-2.png`}
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
          </Div>
          <Div spacing={{ padding: { y: 0.5 } }}>
            <Heading
              level={3}
              fore={{
                color: {
                  light: { default: { name: "yellow", lightness: 20 } },
                  dark: { default: { name: "yellow", lightness: 80 } },
                },
              }}
              spacing={{ padding: { y: 0.5 } }}
            >
              {"3つめ"}
            </Heading>
            <Paragraph>{"水面を調べる前後"}</Paragraph>
            <Div spacing={{ padding: { y: 0.5 } }}>
              <AzureaCoordinate area="盈霊郡" x={2413} y={2368} />
            </Div>
            <Centering>
              <Image
                src={`${AppConfig.BASE_URL}/images/guide/main-story/chapter-15/15-3.png`}
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
          </Div>
          <Div spacing={{ padding: { y: 0.5 } }}>
            <Heading
              level={3}
              fore={{
                color: {
                  light: { default: { name: "yellow", lightness: 20 } },
                  dark: { default: { name: "yellow", lightness: 80 } },
                },
              }}
              spacing={{ padding: { y: 0.5 } }}
            >
              {"4つめ"}
            </Heading>
            <Paragraph>{"盈霊の町に入ったタイミング"}</Paragraph>
            <Div spacing={{ padding: { y: 0.5 } }}>
              <AzureaCoordinate area="盈霊郡" x={2695} y={2365} />
            </Div>
            <Centering>
              <Image
                src={`${AppConfig.BASE_URL}/images/guide/main-story/chapter-15/15-4.png`}
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
          </Div>
          <Div spacing={{ padding: { y: 0.5 } }}>
            <Heading
              level={3}
              fore={{
                color: {
                  light: { default: { name: "yellow", lightness: 20 } },
                  dark: { default: { name: "yellow", lightness: 80 } },
                },
              }}
              spacing={{ padding: { y: 0.5 } }}
            >
              {"5つめ"}
            </Heading>
            <Paragraph>
              {"ホタルのイベントをクリアしたあと（お年寄りの行く先）"}
            </Paragraph>
            <Div spacing={{ padding: { y: 0.5 } }}>
              <AzureaCoordinate area="盈霊郡" x={2718} y={2488} />
            </Div>
            <Centering>
              <Image
                src={`${AppConfig.BASE_URL}/images/guide/main-story/chapter-15/15-5.png`}
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
          </Div>
          <Div spacing={{ padding: { y: 0.5 } }}>
            <Heading
              level={3}
              fore={{
                color: {
                  light: { default: { name: "yellow", lightness: 20 } },
                  dark: { default: { name: "yellow", lightness: 80 } },
                },
              }}
              spacing={{ padding: { y: 0.5 } }}
            >
              {"6つめ"}
            </Heading>
            <Paragraph>{"プロポーズの舞台前に移動するタイミング"}</Paragraph>
            <Div spacing={{ padding: { y: 0.5 } }}>
              <AzureaCoordinate area="盈霊郡" x={2751} y={2403} />
            </Div>
            <Centering>
              <Image
                src={`${AppConfig.BASE_URL}/images/guide/main-story/chapter-15/15-6.png`}
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
          </Div>
        </Section>
      </BasicContainer>
    </CommonLayout>
  );
}
