import CommonLayout from "@/layouts/CommonLayout";
import { Container } from "@mui/material";

export default function RuleGvGPage() {
  return (
    <CommonLayout title="ギルド戦 / Absolve@海神の眼.AZUREA-空の唄-">
      <Container>
        <section>
          <h1>{"ギルド戦"}</h1>
        </section>
        <section>
          <h2>
            <span style={{ color: "darkviolet" }}>
              レイド作成～ギルド戦開始までの流れ
            </span>
          </h2>
          <ol>
            <li>水着開始直後を目安に主戦場および副戦場のレイドをたてます。</li>
            <li>
              主戦場のレイドに入った人をパーティー整理しながら勇士を任命していきます。
            </li>
            <li>
              <span style={{ color: "red" }}>20:55</span>
              を目安に主戦場のレイドへの参加を締め切ります。
            </li>
          </ol>
        </section>
        <section>
          <h2>
            <span style={{ color: "darkviolet" }}>ギルド戦主戦場</span>
          </h2>
          <ul>
            <li>指示や情報共有はレイドチャットにて行います。</li>
            <li>大まかな指示以外は現場の判断で、パテごとに動いてください。</li>
          </ul>
        </section>
        <section>
          <h2>
            <span style={{ color: "darkviolet" }}>注意・補足事項等</span>
          </h2>
          <ul>
            <li>
              主戦場メンバーは
              <span style={{ color: "red" }}>メインアカウント</span>かつ、
              <span style={{ color: "red" }}>戦闘時に操作できる人のみ</span>
              でお願いします。
            </li>
            <li>
              主戦場に限り、
              <span style={{ color: "red" }}>
                主戦場レイドに参加しない場合は参加をお断りしています
              </span>
              。
            </li>
            <li>
              主戦場の定員30名を超過する人数がレイドにいる場合、1戦目と2戦目にわかれて参加いただく場合があります。
            </li>
            <li>
              主戦場の勇士任命の上限は現在のところ仕様上40名までです。ギルド戦中の任命の変更は仕様上できないため、上記時間までにレイド参加お願いします。
            </li>
            <li>
              副戦場はパーティーの隊長の操作が必須のため、可能な限り動かせる方にお願いしています。
            </li>
          </ul>
        </section>
      </Container>
    </CommonLayout>
  );
}
