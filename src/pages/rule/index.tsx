import CommonLayout from "@/layouts/CommonLayout";
import { Container } from "@mui/material";

export default function RuleIndexPage() {
  return (
    <CommonLayout title="基本ルール / Absolve@海神の眼.AZUREA-空の唄-">
      <Container>
        <section>
          <h1>{"基本ルール"}</h1>
        </section>
        <section>
          <h2>
            <span style={{ color: "violet" }}>ノルマ</span>
          </h2>
          <p>
            基本的にノルマとかはないですが、ギルド資金確保のため、インしたらお手伝い任務だけおねがいしています。
          </p>
        </section>
        <section>
          <h2>
            <span style={{ color: "violet" }}>イベント</span>
          </h2>
          <p>
            他のイベントはご自身の都合優先で、都合が合えば参加してください
            いまのとこ
          </p>
          <p>
            <span style={{ color: "red" }}>アイドル金曜20時</span>、
            <span style={{ color: "orange" }}>深空余燼は日曜日22時</span>
            やってます！
          </p>
        </section>
        <section>
          <h2>
            <span style={{ color: "violet" }}>商会任務</span>
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
            <span style={{ color: "violet" }}>ギルド競売</span>
          </h2>
          <p>
            ギルド競売ですが、欲しい人が最安で購入できるようにするため、
            <span style={{ color: "salmon" }}>
              レイドを立ててサイコロで購入できる人を決めています！
            </span>
          </p>
          <p>ルールに沿って競売に参加いただくようおねがいします！</p>
        </section>
        <section>
          <h2>
            <span style={{ color: "violet" }}>Discord</span>
          </h2>
          <p>一応Discordありますが参加は任意です！</p>
          <p>基本的にはイベント通知や情報共有に利用しています！</p>
          <p>参加してもいいよ－って場合は連絡ください！</p>
        </section>
      </Container>
    </CommonLayout>
  );
}
