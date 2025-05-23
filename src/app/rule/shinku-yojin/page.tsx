import { BasicContainer } from "@/components/BasicContainer";
import Highlighter from "@/components/Highlighter";
import { MinolithLink } from "@/components/MinolithLink";
import AppConfig from "@/configurations/app.config";
import RoutePath from "@/constants/RoutePath";
import AuthorizedLayout from "@/layouts/AuthorizedLayout";
import { Metadata } from "next";
import Image from "next/image";
import {
  Breadcrumb,
  Breadcrumbs,
  BreadcrumbsNav,
  Centering,
  Heading,
  Paragraph,
  Section,
} from "react-minolith";

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
    <AuthorizedLayout id={TITLE}>
      <BasicContainer>
        <Section spacing={{ padding: { y: 0.5 } }}>
          <BreadcrumbsNav>
            <Breadcrumbs>
              <Breadcrumb>
                <MinolithLink href={RoutePath.INDEX}>{"Top"}</MinolithLink>
              </Breadcrumb>
              <Breadcrumb>
                <MinolithLink href={RoutePath.RULE}>{"ルール"}</MinolithLink>
              </Breadcrumb>
              <Breadcrumb>{TITLE}</Breadcrumb>
            </Breadcrumbs>
          </BreadcrumbsNav>
        </Section>
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
            <span style={{ color: "var(--minolith-color-yellow-50)" }}>概要</span>
          </h2>
          <ul>
            <li>{`メイン垢とサブ垢のレイドはわけてたてています`}</li>
            <li>
              <Highlighter colorName="blue">
                {"20:30にサブ垢レイドで甲板処理"}
              </Highlighter>
              {"完了後、"}
              <Highlighter colorName="red">
                {"20:45にメイン垢レイドは深空余燼のボス戦"}
              </Highlighter>
              {`にはいってます（先にはいってしまうと放置メンバーが甲板から動けなくなるため）`}
            </li>
            <li>
              <span
                style={{ color: "var(--minolith-color-red-50)" }}
              >{`ボスは先になぐらず、ある程度人がボス前にあつまってからなぐってください`}</span>
            </li>
            <li>
              {`放置参加のひとはヘイトスキルをはずすか火力流にしておいてください`}
            </li>
          </ul>
        </section>
        <section>
          <h2>
            <span style={{ color: "var(--minolith-color-yellow-50)" }}>
              スクリュー戦
            </span>
          </h2>
          <ul>
            <li>{`爆破魔がでてきたら優先的に倒してください`}</li>
          </ul>
        </section>
        <section>
          <h2>
            <span style={{ color: "var(--minolith-color-yellow-50)" }}>
              スクリュー→メカニック　フィールド移動
            </span>
          </h2>
          <ul>
            <li>
              <Paragraph>
                <Highlighter colorName="blue">{`偶数番号のパーティー`}</Highlighter>
                {"は「"}
                <Highlighter colorName="blue">{`右ルート`}</Highlighter>
                {"」から。"}
              </Paragraph>
              <Paragraph>
                <Highlighter colorName="red">{`奇数番号のパーティー`}</Highlighter>
                {"は「"}
                <Highlighter colorName="red">{`左ルート`}</Highlighter>
                {"」から。"}
              </Paragraph>
            </li>
          </ul>
        </section>
        <section>
          <h2>
            <span style={{ color: "var(--minolith-color-yellow-50)" }}>
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
            <span style={{ color: "var(--minolith-color-yellow-50)" }}>
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
            <span style={{ color: "var(--minolith-color-yellow-50)" }}>守護者戦</span>
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
              style={{ color: "var(--minolith-color-yellow-50)" }}
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
              style={{ color: "var(--minolith-color-yellow-50)" }}
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
              style={{ color: "var(--minolith-color-yellow-50)" }}
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
              style={{ color: "var(--minolith-color-yellow-50)" }}
            >{`からくり博士戦`}</span>
          </h2>
          <ul>
            <li>
              <Highlighter colorName="red">{`終了10秒前`}</Highlighter>
              {`になぐってください`}
            </li>
            <li>{`今のところ弱いので言うことないです`}</li>
          </ul>
        </section>
      </BasicContainer>
    </AuthorizedLayout>
  );
}
