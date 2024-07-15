import AppConfig from "@/configurations/app.config";
import CommonLayout from "@/layouts/CommonLayout";
import { Box, Container } from "@mui/material";
import { Metadata } from "next";
import Image from "next/image";

const TITLE = "真空余燼";
const EYECATCH = `${AppConfig.BASE_URL}/images/rule/shinku-yojin/eyecatch.png`;

export const metadata: Metadata = {
  title: TITLE,
  openGraph: {
    title: TITLE,
    images: [EYECATCH],
  },
};

export default function RuleShinkuYojinPage() {
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
            <span style={{ color: "var(--color-yellow-50)" }}>概要</span>
          </h2>
          <ul>
            <li>{`メイン垢とサブ垢のレイドはわけてたてています`}</li>
            <li>
              {`21:30にサブ垢レイドで甲板処理完了後、21:45にメイン垢レイドは深空余燼にはいってます（先にはいってしまうと放置メンバーが甲板から動けなくなるため）`}
            </li>
            <li>
              <span
                style={{ color: "var(--color-red-50)" }}
              >{`ボスは先になぐらず、ある程度人がボス前にあつまってからなぐってください`}</span>
            </li>
            <li>
              {`放置参加のひとはヘイトスキルをはずすか火力流にしておいてください`}
            </li>
          </ul>
        </section>
        <section>
          <h2>
            <span style={{ color: "var(--color-yellow-50)" }}>
              スクリュー戦
            </span>
          </h2>
          <ul>
            <li>{`爆破魔がでてきたら優先的に倒してください`}</li>
          </ul>
        </section>
        <section>
          <h2>
            <span style={{ color: "var(--color-yellow-50)" }}>
              スクリュー→メカニック　フィールド移動
            </span>
          </h2>
          <ul>
            <li>
              {`偶数番号のパーティーは「右ルート」。奇数番号のパーティーは「左ルート」から。`}
            </li>
          </ul>
        </section>
        <section>
          <h2>
            <span style={{ color: "var(--color-yellow-50)" }}>
              メカニック戦
            </span>
          </h2>
          <ul>
            <li>
              {`シフトがどうこうのメッセージが出たらフィールド奥のアイコンから倒すべき操縦士のメッセージを表示させてください`}
            </li>
            <li>{`操縦士の体力をけずったら電磁バリアに入ってください`}</li>
          </ul>
        </section>
        <section>
          <h2>
            <span style={{ color: "var(--color-yellow-50)" }}>
              メカニック→守護者　フィールド移動
            </span>
          </h2>
          <ul>
            <li>
              {`地熱エネルギーの足元が表示されたら、入り口側に全員あつまってください。エリア確定後にタゲもってるひとは離れてください。`}
            </li>
          </ul>
        </section>
        <section>
          <h2>
            <span style={{ color: "var(--color-yellow-50)" }}>守護者戦</span>
          </h2>
          <ul>
            <li>
              {`地熱エネルギーの足元が表示されたら、入り口側に全員あつまってください。エリア確定後にタゲもってるひとは離れてください。`}
            </li>
          </ul>
        </section>
        <section>
          <h2>
            <span
              style={{ color: "var(--color-yellow-50)" }}
            >{`守護者戦→ポイズナー　フィールド移動`}</span>
          </h2>
          <ul>
            <li>
              {`地熱エネルギーの足元が表示されたら、入り口側に全員あつまってください。エリア確定後にタゲもってるひとは離れてください。`}
            </li>
          </ul>
        </section>
        <section>
          <h2>
            <span
              style={{ color: "var(--color-yellow-50)" }}
            >{`ポイズナー戦`}</span>
          </h2>
          <ul>
            <li>
              {`タゲもってるひとはポイズンの色にあわせてエリアを移動してください`}
            </li>
            <li>{`蓋閉めるギミックは空気読んでしめてください`}</li>
          </ul>
        </section>
        <section>
          <h2>
            <span
              style={{ color: "var(--color-yellow-50)" }}
            >{`ポイズナー→からくり博士　フィールド移動`}</span>
          </h2>
          <ul>
            <li>
              {`ポイズナー討伐後、1分しか猶予がないのでぱぱっと移動します`}
            </li>
            <li>
              {`スロープ上がって突き当り最初のゲート、左のハシラをジャンプしながら前進でエリアに侵入可能です`}
            </li>
          </ul>
        </section>
        <section>
          <h2>
            <span
              style={{ color: "var(--color-yellow-50)" }}
            >{`からくり博士戦`}</span>
          </h2>
          <ul>
            <li>
              <span
                style={{ color: "var(--color-red-50)" }}
              >{`終了10秒前`}</span>
              {`終了10秒前になぐってください`}
            </li>
            <li>{`今のところ弱いので言うことないです`}</li>
          </ul>
        </section>
      </Container>
    </CommonLayout>
  );
}
