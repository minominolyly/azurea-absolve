import { BasicContainer } from "@/components/BasicContainer";
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
  Section,
} from "react-minolith";

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
        <Section>
          <Heading
            level={2}
            fore={{
              color: {
                light: { default: { name: "yellow", lightness: 20 } },
                dark: { default: { name: "yellow", lightness: 80 } },
              },
            }}
          >
            {"概要"}
          </Heading>
          <ul>
            <li>{`アイドルイベントの中心鯖バージョンてきなもの`}</li>
            <li>{`[ギルド飛空艇,(430,170)]にて開放可能`}</li>
            <li>
              <span
                style={{ color: "var(--minolith-color-violet-70)" }}
              >{`月曜日20:45`}</span>
              {`に開放します`}
            </li>
            <li>{`週ごとにギルイベとして実施できる陣営がきりかわるので、ギルドイベントとして実施しない週がある`}</li>
            <li>{`ギルイベとして実施しない週は実施している陣営の妨害をする`}</li>
            <li>{`イベント時間内にチャンネルや本鯖と中心鯖を行来するため、レイドは基本的に無しで実施`}</li>
          </ul>
        </Section>
        <Section>
          <Heading
            level={2}
            fore={{
              color: {
                light: { default: { name: "yellow", lightness: 20 } },
                dark: { default: { name: "yellow", lightness: 80 } },
              },
            }}
          >
            {"1段階目"}
          </Heading>
          <ul>
            <li>{`専用マップ`}</li>
            <li>{`フォールガイズみたいなことをする`}</li>
            <li>{`ギルド全体で20人以上がクリアーする必要がある`}</li>
          </ul>
        </Section>
        <Section>
          <Heading
            level={2}
            fore={{
              color: {
                light: { default: { name: "yellow", lightness: 20 } },
                dark: { default: { name: "yellow", lightness: 80 } },
              },
            }}
          >
            {"2段階目"}
          </Heading>
          <ul>
            <li>{`専用マップ`}</li>
            <li>{`とんでくるバラをひろう。7つひろうと雲垂姫の権利が獲得できる`}</li>
            <li>{`ゼパルをたおす（アイドルのボスのような感じ）`}</li>
          </ul>
        </Section>
        <Section>
          <Heading
            level={2}
            fore={{
              color: {
                light: { default: { name: "yellow", lightness: 20 } },
                dark: { default: { name: "yellow", lightness: 80 } },
              },
            }}
          >
            {"3段階目"}
          </Heading>
          <ul>
            <li>{`神棄の地の専用マップ、神棄護送チャンネルにおくられる（チャンネルはランダムにえらばれる）`}</li>
            <li>{`ゾウにのった雲垂姫を他陣営から防衛しながら指定ポイントまで進む`}</li>
            <li>{`最後に宝箱を回収して終了`}</li>
          </ul>
        </Section>
      </BasicContainer>
    </AuthorizedLayout>
  );
}
