import { BasicContainer } from "@/components/BasicContainer";
import AppConfig from "@/configurations/app.config";
import CommonLayout from "@/layouts/CommonLayout";
import { Box, Container } from "@mui/material";
import { Metadata } from "next";
import Image from "next/image";

const TITLE = "クイズバトル！";
const EYECATCH = `${AppConfig.BASE_URL}/images/event/quiz-battle/eyecatch.png`;

export const metadata: Metadata = {
  title: TITLE,
  openGraph: {
    title: TITLE,
    images: [EYECATCH],
  },
};

export default function QuizBattleIndexPage() {
  return (
    <CommonLayout id={TITLE}>
      <BasicContainer>
        <section>
          <h1 style={{ color: "var(--color-yellow-50)" }}>{TITLE}</h1>
          <Box
            sx={{
              paddingTop: "1rem",
              paddingBottom: "1rem",
              display: "flex",
              justifyContent: "center",
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
              <p>{`パーティー対抗でのクイズバトルです`}</p>
            </li>
            <li>
              <p>{`出題された二択クイズに制限時間内に解答します`}</p>
            </li>
            <li>
              <p>{`もっとも数多く正解したパーティーが勝利です`}</p>
              <p>{`パーティーメンバーと共に知恵を絞りましょう`}</p>
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
                {`会長がパーティー分けのためのレイドをギルドチャットにはるので、参加希望者はレイドに加入してください`}
              </p>
            </li>
            <li>
              <p>
                {`レイドの団長が参加者を任意のパーティーに可能な限り均等に振り分けます`}
              </p>
              <p>{`人数が均等にならない場合がありますが、ハンデ等は用意しません`}</p>
            </li>
            <li>
              <p>{`参加メンバーが確定した時点で一旦レイドを解散します`}</p>
              <p>
                <span
                  style={{
                    color: "var(--color-red-70)",
                  }}
                >{`パーティーは解散しないでください`}</span>
              </p>
            </li>
            <li>
              <p>{`全問終了まで下記を繰り返します`}</p>
              <Box
                sx={{
                  border: "1px solid var(--color-gray-70)",
                  borderRadius: "0.25rem",
                  padding: "0.5rem",
                }}
              >
                <ol>
                  <li>
                    <p>
                      {`会長が`}
                      <span
                        style={{ color: "var(--color-red-70)" }}
                      >{`解答Aレイド`}</span>
                      {`と`}
                      <span
                        style={{ color: "var(--color-blue-70)" }}
                      >{`解答Bレイド`}</span>
                      {`の2つのレイドをギルドチャットにたてます`}
                    </p>
                  </li>
                  <li>
                    <p>
                      {`問題を発表します正解だとおもう方の解答のレイドにパテごと参加してください`}
                    </p>
                    <p>
                      {`制限時間は`}
                      <span
                        style={{
                          color: "var(--color-blue-70)",
                        }}
                      >{`問題の発表から30秒`}</span>
                      {`です`}
                    </p>
                  </li>
                  <li>
                    <p>
                      {`全パーティーの解答が完了、または解答時間終了となった時点で締め切ります`}
                    </p>
                  </li>
                  <li>
                    <p>{`会長が正解のレイドに参加し、答え合わせとします`}</p>
                    <p>{`正解したパーティーを会長が記録します`}</p>
                  </li>
                  <li>
                    <p>
                      {`記録が完了した時点で、`}
                      <span
                        style={{
                          color: "var(--color-violet-70)",
                          textDecoration: "underline",
                        }}
                      >{`会長が解答用レイドを解散します`}</span>
                    </p>
                    <p>
                      <span
                        style={{
                          color: "var(--color-red-70)",
                          fontWeight: "bold",
                        }}
                      >{`レイドやパーティーを脱退しないでください`}</span>
                    </p>
                  </li>
                </ol>
              </Box>
            </li>
            <li>
              <p>{`全問終了した時点でゲーム終了です`}</p>
              <p>{`もっとも多く正解したパーティーを勝利とします`}</p>
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
              <p>{`ヒント等は参照せず、今ある知識で挑んでください`}</p>
            </li>
          </ul>
        </section>
      </BasicContainer>
    </CommonLayout>
  );
}
