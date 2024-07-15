import AppConfig from "@/configurations/app.config";
import CommonLayout from "@/layouts/CommonLayout";
import { Box, Container } from "@mui/material";
import { Metadata } from "next";
import Image from "next/image";

const TITLE = "みのサブ探し！";
const EYECATCH = `${AppConfig.BASE_URL}/images/event/search-and-report/eyecatch.png`;

export const metadata: Metadata = {
  title: TITLE,
  openGraph: {
    title: TITLE,
    images: [EYECATCH],
  },
};

export default function SearchAndReportIndexPage() {
  return (
    <CommonLayout title={TITLE}>
      <Container className="container">
        <section>
          <h1 style={{ color: "var(--color-yellow-50)" }}>{TITLE}</h1>
          <Box
            sx={{
              paddingTop: "1rem",
              paddingBottom: "1rem",
              display: "flex",
              justifyContent: "center"
            }}
          >
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
          </Box>
        </section>
        <section>
          <h2>
            <span
              style={{ color: "var(--color-yellow-50)" }}
            >{`目的・勝利条件`}</span>
          </h2>
          <ul>
            <li>
              <p>{`パーティー対抗での人探しバトルです`}</p>
            </li>
            <li>
              <p>
                {`制限時間内に、`}
                <span
                  style={{ color: "var(--color-red-50)" }}
                >{`各マップの本サーバー1ch`}</span>
                {`に配置された対象をできるだけ多く見つけ出しましょう`}
              </p>
            </li>
          </ul>
        </section>
        <section>
          <h2>
            <span style={{ color: "var(--color-yellow-50)" }}>{`流れ`}</span>
          </h2>
          <ol>
            <li>
              <p>
                {`会長がレイドをギルドチャットにはるので、参加希望者はレイドに加入してください`}
              </p>
            </li>
            <li>
              <p>
                {`レイドの団長が参加者を任意のパーティーに可能な限り均等に振り分けます`}
              </p>
              <p>{`人数が均等にならない場合がありますが、ハンデ等は用意しません`}</p>
            </li>
            <li>
              <p>
                {`「メニュー > 設定 > 表示」にある`}
                <span style={{ color: "var(--color-red-50)" }}>
                  {"他人頭上名前"}
                </span>
                {"を"}
                <span style={{ color: "var(--color-blue-50)" }}>{"OFF"}</span>
                {"にしてください"}
              </p>
            </li>
            <li>
              <p>
                {`スタートの合図があるまで「ギルド飛空艇」にて待機してください`}
              </p>
            </li>
            <li>
              <p>{`スタート後はパーティーそれぞれに行動してください`}</p>
            </li>
            <li>
              <p>
                {`対象を発見したら`}
                <span
                  style={{ color: "var(--color-red-50)" }}
                >{`パーティーチャットに`}</span>
                {`対象の座標と名前をはってください`}
              </p>
            </li>
            <li>
              <p>{`時間内に対象全員を発見した場合は、ギルドチャットにて「全員みつけました」と報告してください`}</p>
            </li>
            <li>
              <p>{`全員発見の報告またはタイムリミットを迎えた時点でゲーム終了です`}</p>
            </li>
            <li>
              <p>{`終了時点で発見した対象の数を、パーティーの隊長がギルドチャットにて報告してください`}</p>
            </li>
            <li>
              <p>{`最後に会長が1対象ずつ答え合わせをしていきます`}</p>
            </li>
            <li>
              <p>{`もっとも多く対象を発見したパーティーを勝利とします`}</p>
              <p>{`発見した対象の数が同列1位だった場合、サドンデスを実施します`}</p>
            </li>
          </ol>
        </section>
        <section>
          <h2>
            <span style={{ color: "var(--color-yellow-50)" }}>
              {"サドンデスの流れ"}
            </span>
          </h2>
          <ol>
            <li>
              <p>
                {`スタートの合図があるまで「ギルド飛空艇」にて待機してください`}
              </p>
            </li>
            <li>
              <p>{`スタート後はパーティーそれぞれに行動してください`}</p>
            </li>
            <li>
              <p>
                {`対象を発見したら`}
                <span
                  style={{ color: "var(--color-red-50)" }}
                >{`ギルドチャットに`}</span>
                {`対象の座標をはってください`}
              </p>
            </li>
            <li>
              <p>{`最もはやく発見を報告したパーティーを勝利とします`}</p>
            </li>
          </ol>
        </section>
        <section>
          <h2>
            <span style={{ color: "var(--color-yellow-50)" }}>
              {"禁止・制限事項"}
            </span>
          </h2>
          <ul>
            <li>
              <p>{`基本は自力での操作のみで対象を探してください`}</p>
              <p>{`座標を指定した移動はマップからの場合のみ許可します`}</p>
            </li>
            <li>
              <p>
                {`ヒントとして参照してよい情報は「メニュー > ギルド > メンバー」から確認できる`}
                <span
                  style={{ color: "var(--color-red-50)" }}
                >{`「現在のマップ」`}</span>
                {`および`}
                <span
                  style={{ color: "var(--color-red-50)" }}
                >{`「情報確認」から参照できるキャラメイクのみ`}</span>
                {`です`}
              </p>
            </li>
          </ul>
        </section>
      </Container>
    </CommonLayout>
  );
}
