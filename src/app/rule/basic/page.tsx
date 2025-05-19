import { BasicContainer } from "@/components/BasicContainer";
import { MinolithLink } from "@/components/MinolithLink";
import AppConfig from "@/configurations/app.config";
import RoutePath from "@/constants/RoutePath";
import AuthorizedLayout from "@/layouts/AuthorizedLayout";
import { Metadata } from "next";
import Image from "next/image";
import {
  Breadcrumb,
  Breadcrumbs,
  BreadcrumbsNav,
  Centering,
  Heading,
  Paragraph,
  Section,
  Span,
} from "react-minolith";

const TITLE = "基本ルール";
const EYECATCH = `${AppConfig.BASE_URL}/images/rule/basic/eyecatch.png`;

export const metadata: Metadata = {
  title: TITLE,
  openGraph: {
    title: TITLE,
    images: [EYECATCH],
  },
};

export default function RuleBasicPage() {
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
                <MinolithLink href={RoutePath.RULE}>{"ルール"}</MinolithLink>
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
        <Section spacing={{ padding: { y: 1 } }}>
          <Heading
            level={2}
            fore={{
              color: {
                light: { default: { name: "yellow", lightness: 20 } },
                dark: { default: { name: "yellow", lightness: 80 } },
              },
            }}
          >
            {"ノルマ"}
          </Heading>
          <Paragraph>
            {
              "基本的にノルマとかはないですが、ギルド資金確保のため、インしたらお手伝い任務だけおねがいしています。"
            }
          </Paragraph>
        </Section>
        <Section spacing={{ padding: { y: 1 } }}>
          <Heading
            level={2}
            fore={{
              color: {
                light: { default: { name: "yellow", lightness: 20 } },
                dark: { default: { name: "yellow", lightness: 80 } },
              },
            }}
          >
            {"イベント"}
          </Heading>
          <Paragraph>
            {"他のイベントはご自身の都合優先で、都合が合えば参加してください。"}
          </Paragraph>
          <Paragraph>{"いまのところ、"}</Paragraph>
          <ul>
            <li>
              <Span style={{ color: "var(--minolith-color-magenta-70)" }}>
                {"雲垂姫は、水着イベント終了直後（火曜日の20:45分頃開始）"}
              </Span>
            </li>
            <li>
              <Span style={{ color: "var(--minolith-color-violet-70)" }}>
                {"深空余燼は、水着イベント終了直後（水曜日の20:45分頃開始）"}
              </Span>
            </li>
            <li>
              <Span style={{ color: "var(--minolith-color-red-70)" }}>
                {"アイドルは、水着イベント終了直後（金曜日の20:45分頃開始）"}
              </Span>
            </li>
          </ul>
          <Paragraph>
            {"にやってます。"}
          </Paragraph>
        </Section>
        <Section spacing={{ padding: { y: 1 } }}>
          <Heading
            level={2}
            fore={{
              color: {
                light: { default: { name: "yellow", lightness: 20 } },
                dark: { default: { name: "yellow", lightness: 80 } },
              },
            }}
          >
            {"商会任務"}
          </Heading>
          <Paragraph>
            商会任務のヘルプは基本
            <Span style={{ color: "var(--minolith-color-cyan-70)" }}>
              早いもの勝ち
            </Span>
            です！
          </Paragraph>
          <Paragraph>
            自分のサブがいて自分で回収したい場合は毎回一声お願いします！
          </Paragraph>
        </Section>
        <Section spacing={{ padding: { y: 1 } }}>
          <Heading
            level={2}
            fore={{
              color: {
                light: { default: { name: "yellow", lightness: 20 } },
                dark: { default: { name: "yellow", lightness: 80 } },
              },
            }}
          >
            {"ギルド競売"}
          </Heading>
          <Paragraph>
            ギルド競売ですが、欲しい人が最安で購入できるようにするため、
            <Span style={{ color: "var(--minolith-color-violet-70)" }}>
              レイドを立ててサイコロで購入できる人を決めています！
            </Span>
          </Paragraph>
          <Paragraph>
            参加者が少ないと判断した場合は最安早い者勝ちにしています。
          </Paragraph>
          <Paragraph>
            ルールに沿って競売に参加いただくようおねがいします！
          </Paragraph>
        </Section>
        <Section spacing={{ padding: { y: 1 } }}>
          <Heading
            level={2}
            fore={{
              color: {
                light: { default: { name: "yellow", lightness: 20 } },
                dark: { default: { name: "yellow", lightness: 80 } },
              },
            }}
          >
            {"Discord"}
          </Heading>
          <Paragraph>一応Discordありますが参加は任意です。</Paragraph>
          <Paragraph>
            基本的にはイベント通知や情報共有、領土戦のVCに利用しています。
          </Paragraph>
          <Paragraph>
            参加してもいいよ－って場合は会長まで連絡ください。
          </Paragraph>
        </Section>
      </BasicContainer>
    </AuthorizedLayout>
  );
}
