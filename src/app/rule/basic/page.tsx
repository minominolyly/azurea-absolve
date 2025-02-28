import { BasicContainer } from "@/components/BasicContainer";
import AppConfig from "@/configurations/app.config";
import CommonLayout from "@/layouts/CommonLayout";
import { Box, Container } from "@mui/material";
import { Metadata } from "next";
import Image from "next/image";
import { Section, Heading, Centering } from "react-minolith";

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
        <section>
          <h2>
            <span style={{ color: "var(--color-yellow-50)" }}>ノルマ</span>
          </h2>
          <p>
            基本的にノルマとかはないですが、ギルド資金確保のため、インしたらお手伝い任務だけおねがいしています。
          </p>
        </section>
        <section>
          <h2>
            <span style={{ color: "var(--color-yellow-50)" }}>イベント</span>
          </h2>
          <p>
            他のイベントはご自身の都合優先で、都合が合えば参加してください
            いまのとこ
          </p>
          <p>
            <span style={{ color: "var(--color-violet-70)" }}>
              深空余燼は水曜日21:30
            </span>
            、
            <span style={{ color: "var(--color-red-70)" }}>
              アイドルは金曜21:45
            </span>
            にやってます！
          </p>
        </section>
        <section>
          <h2>
            <span style={{ color: "var(--color-yellow-50)" }}>商会任務</span>
          </h2>
          <p>
            商会任務のヘルプは基本
            <span style={{ color: "var(--color-cyan-70)" }}>早いもの勝ち</span>
            です！
          </p>
          <p>自分のサブがいて自分で回収したい場合は毎回一声お願いします！</p>
        </section>
        <section>
          <h2>
            <span style={{ color: "var(--color-yellow-50)" }}>ギルド競売</span>
          </h2>
          <p>
            ギルド競売ですが、欲しい人が最安で購入できるようにするため、
            <span style={{ color: "var(--color-violet-70)" }}>
              レイドを立ててサイコロで購入できる人を決めています！
            </span>
          </p>
          <p>参加者が少ないと判断した場合は最安早い者勝ちにしています。</p>
          <p>ルールに沿って競売に参加いただくようおねがいします！</p>
        </section>
        <section>
          <h2>
            <span style={{ color: "var(--color-yellow-50)" }}>Discord</span>
          </h2>
          <p>一応Discordありますが参加は任意です！</p>
          <p>基本的にはイベント通知や情報共有に利用しています！</p>
          <p>参加してもいいよ－って場合は会長まで連絡ください！</p>
        </section>
      </BasicContainer>
    </CommonLayout>
  );
}
