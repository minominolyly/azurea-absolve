import AppConfig from "@/configurations/app.config";
import CommonLayout from "@/layouts/CommonLayout";
import { Box, Container } from "@mui/material";
import { Metadata } from "next";
import Image from "next/image";

const TITLE = "雲垂姫";
const EYECATCH = `${AppConfig.BASE_URL}/images/rule/unsui-hime/eyecatch.png`;

export const metadata: Metadata = {
  title: TITLE,
  openGraph: {
    title: TITLE,
    images: [EYECATCH],
  },
};

export default function RuleUnsuiHimePage() {
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
            <span style={{ color: "var(--color-yellow-50)" }}>{"概要"}</span>
          </h2>
          <ul>
            <li>{`アイドルイベントの中心鯖バージョンてきなもの`}</li>
            <li>{`[ギルド飛空艇,(430,170)]にて開放可能`}</li>
            <li>
              <span
                style={{ color: "var(--color-violet-70)" }}
              >{`日曜日21:00`}</span>
              {`に開放します`}
            </li>
            <li>{`週ごとにギルイベとして実施できる陣営がきりかわるので、ギルドイベントとして実施しない週がある`}</li>
            <li>{`ギルイベとして実施しない週は実施している陣営の妨害をする`}</li>
            <li>{`イベント時間内にチャンネルや本鯖と中心鯖を行来するため、レイドは基本的に無しで実施`}</li>
          </ul>
        </section>
        <section>
          <h2>
            <span style={{ color: "var(--color-yellow-50)" }}>{"1段階目"}</span>
          </h2>
          <ul>
            <li>{`専用マップ`}</li>
            <li>{`フォールガイズみたいなことをする`}</li>
            <li>{`ギルド全体で20人以上がクリアーする必要がある`}</li>
          </ul>
        </section>
        <section>
          <h2>
            <span style={{ color: "var(--color-yellow-50)" }}>{"2段階目"}</span>
          </h2>
          <ul>
            <li>{`専用マップ`}</li>
            <li>{`とんでくるバラをひろう。7つひろうと雲垂姫の権利が獲得できる`}</li>
            <li>{`ゼパルをたおす（アイドルのボスのような感じ）`}</li>
          </ul>
        </section>
        <section>
          <h2>
            <span style={{ color: "var(--color-yellow-50)" }}>{"3段階目"}</span>
          </h2>
          <ul>
            <li>{`神棄の地の専用マップ、神棄護送チャンネルにおくられる（チャンネルはランダムにえらばれる）`}</li>
            <li>{`ゾウにのった雲垂姫を他陣営から防衛しながら指定ポイントまで進む`}</li>
            <li>{`最後に宝箱を回収して終了`}</li>
          </ul>
        </section>
      </Container>
    </CommonLayout>
  );
}
