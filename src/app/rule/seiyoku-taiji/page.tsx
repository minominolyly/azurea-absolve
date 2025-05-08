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

const TITLE = "聖翼退治";
const EYECATCH = `${AppConfig.BASE_URL}/images/rule/seiyoku-taiji/eyecatch.png`;

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
        <section>
          <h2>
            <span style={{ color: "var(--minolith-color-yellow-50)" }}>{"概要"}</span>
          </h2>
          <ul>
            <li>{`専用中心鯖マップで実施されるワールドボス`}</li>
            <li>{`メインchとサブchが存在し、侵入は早いもの勝ち`}</li>
            <li>{`20:58頃から待機し、時計マークのイベントボタンがでたらすぐにメインchに移動する`}</li>
            <li>{`レイドは中心鯖かつ準備時間も短いため基本的にはないとおもってください`}</li>
            <li>{`中に入っても放置してると追い出されるので、レイドがあっても放置の場合は入らないようにおねがいします`}</li>
          </ul>
        </section>
      </BasicContainer>
    </AuthorizedLayout>
  );
}
