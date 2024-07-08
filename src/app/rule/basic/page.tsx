import CommonLayout from "@/layouts/CommonLayout";
import { Container } from "@mui/material";
import { Metadata } from "next";

const TITLE = "基本ルール";

export const metadata: Metadata = {
  title: TITLE,
  openGraph: {
    title: TITLE,
  },
};

export default function RuleBasicPage() {
  return (
    <CommonLayout title={TITLE}>
      <Container className="container">
        <section>
          <h1>{"基本ルール"}</h1>
        </section>
        <section>
          <h2>
            <span style={{ color: "darkviolet" }}>ノルマ</span>
          </h2>
          <p>
            基本的にノルマとかはないですが、ギルド資金確保のため、インしたらお手伝い任務だけおねがいしています。
          </p>
        </section>
        <section>
          <h2>
            <span style={{ color: "darkviolet" }}>イベント</span>
          </h2>
          <p>
            他のイベントはご自身の都合優先で、都合が合えば参加してください
            いまのとこ
          </p>
          <p>
            <span style={{ color: "orange" }}>深空余燼は水曜日21:45</span>、
            <span style={{ color: "red" }}>アイドルは金曜21:45</span>
            にやってます！
          </p>
        </section>
        <section>
          <h2>
            <span style={{ color: "darkviolet" }}>商会任務</span>
          </h2>
          <p>
            商会任務のヘルプは基本
            <span style={{ color: "darkturquoise" }}>早いもの勝ち</span>
            です！
          </p>
          <p>自分のサブがいて自分で回収したい場合は毎回一声お願いします！</p>
        </section>
        <section>
          <h2>
            <span style={{ color: "darkviolet" }}>ギルド競売</span>
          </h2>
          <p>
            ギルド競売ですが、欲しい人が最安で購入できるようにするため、
            <span style={{ color: "orange" }}>
              レイドを立ててサイコロで購入できる人を決めています！
            </span>
          </p>
          <p>参加者が少ないと判断した場合は最安早い者勝ちにしています。</p>
          <p>ルールに沿って競売に参加いただくようおねがいします！</p>
        </section>
        <section>
          <h2>
            <span style={{ color: "darkviolet" }}>Discord</span>
          </h2>
          <p>一応Discordありますが参加は任意です！</p>
          <p>基本的にはイベント通知や情報共有に利用しています！</p>
          <p>参加してもいいよ－って場合は会長まで連絡ください！</p>
        </section>
      </Container>
    </CommonLayout>
  );
}
