import { BasicContainer } from "@/components/BasicContainer";
import AppConfig from "@/configurations/app.config";
import CommonLayout from "@/layouts/CommonLayout";
import { Metadata } from "next";
import Image from "next/image";
import { Section, Heading, Centering, Paragraph } from "react-minolith";

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
            基本的にノルマとかはないですが、ギルド資金確保のため、インしたらお手伝い任務だけおねがいしています。
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
            他のイベントはご自身の都合優先で、都合が合えば参加してください
            いまのとこ
          </Paragraph>
          <Paragraph>
            <span style={{ color: "var(--minolith-color-violet-70)" }}>
              深空余燼は水曜日20:45
            </span>
            、
            <span style={{ color: "var(--minolith-color-red-70)" }}>
              アイドルは金曜21:45
            </span>
            にやってます！
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
            <span style={{ color: "var(--minolith-color-cyan-70)" }}>
              早いもの勝ち
            </span>
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
            <span style={{ color: "var(--color-violet-70)" }}>
              レイドを立ててサイコロで購入できる人を決めています！
            </span>
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
          <Paragraph>一応Discordありますが参加は任意です！</Paragraph>
          <Paragraph>
            基本的にはイベント通知や情報共有に利用しています！
          </Paragraph>
          <Paragraph>
            参加してもいいよ－って場合は会長まで連絡ください！
          </Paragraph>
        </Section>
      </BasicContainer>
    </CommonLayout>
  );
}
