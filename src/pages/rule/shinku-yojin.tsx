import CommonLayout from "@/layouts/CommonLayout";
import { Container } from "@mui/material";

export default function RuleShinkuYojinPage() {
  return (
    <CommonLayout title="真空余燼 / Absolve@海神の眼.AZUREA-空の唄-">
      <Container>
        <section>
          <h1>{"真空余燼"}</h1>
        </section>
        <section>
          <h2>
            <span style={{ color: "darkviolet" }}>概要</span>
          </h2>
          <ul>
            <li>
              操作可能なメインアカウント用のレイド（以下、エリートレイド）と、放置およびサブアカウント用のレイド（以下、甲板レイド）の２つを作成します。
            </li>
            <li>エリートレイドは、イベント開始直後に余燼号へ侵入します。</li>
            <li>甲板レイドは、甲板にてオートで雑魚狩りをします。</li>
            <li>
              エリートレイドの指示や情報共有はレイドチャットにて行います。
            </li>
          </ul>
        </section>
        <section>
          <h2>
            <span style={{ color: "darkviolet" }}>注意・補足事項等</span>
          </h2>
          <ul>
            <li>
              余燼号での各ボスとの戦闘開始は、指示があるまで攻撃せずに待機してください。
            </li>
            <li>
              事前に任命したタンク役の方以外はヘイトスキルを外してください。
            </li>
          </ul>
        </section>
      </Container>
    </CommonLayout>
  );
}
