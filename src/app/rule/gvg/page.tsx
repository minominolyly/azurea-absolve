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
  Div,
  Heading,
  Paragraph,
  Section,
} from "react-minolith";

const TITLE = "ギルド戦";
const EYECATCH = `${AppConfig.BASE_URL}/images/rule/gvg/eyecatch.png`;

export const metadata: Metadata = {
  title: TITLE,
  openGraph: {
    title: TITLE,
    images: [EYECATCH],
  },
};

export default function RuleGvGPage() {
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
            spacing={{ padding: { y: 0.5 } }}
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
            spacing={{ padding: { y: 0.5 } }}
          >
            {"概要"}
          </Heading>
          <Section spacing={{ padding: { y: 0.5 } }}>
            <Heading
              level={3}
              fore={{
                color: {
                  light: { default: { name: "yellow", lightness: 20 } },
                  dark: { default: { name: "yellow", lightness: 80 } },
                },
              }}
              spacing={{ padding: { y: 0.5 } }}
            >
              {"事前準備"}
            </Heading>
            <Div>
              <Paragraph>
                {"他のイベント同様、ギルド戦の参加は任意です。"}
              </Paragraph>
              <Paragraph>
                {
                  "不参加の場合は、主戦場の割当から外しますので、副会長までご連絡おねがいします。"
                }
              </Paragraph>
              <Paragraph>
                {"主戦場のメンバーは事前に相談の上、副会長が決定しています。"}
              </Paragraph>
              <Paragraph>
                {"主戦希望の方は副会長まで連絡お願いします。"}
              </Paragraph>
              <Paragraph>
                {
                  "水着の時間あたりに、主戦場と副戦場でそれぞれレイドを、ギルドチャットにはっているはずなので、参加してください。"
                }
              </Paragraph>
            </Div>
          </Section>
          <Section spacing={{ padding: { y: 0.5 } }}>
            <Heading
              level={3}
              fore={{
                color: {
                  light: { default: { name: "yellow", lightness: 20 } },
                  dark: { default: { name: "yellow", lightness: 80 } },
                },
              }}
              spacing={{ padding: { y: 0.5 } }}
            >
              {"VCについて"}
            </Heading>
            <Div>
              <Paragraph>
                {"ギルド戦では、ギルド内VCを使用することがあります。"}
              </Paragraph>
              <Paragraph>
                {"任意ですが、視聴可能な方は、視聴していただけると助かります。"}
              </Paragraph>
            </Div>
          </Section>
          <Section spacing={{ padding: { y: 0.5 } }}>
            <Heading
              level={3}
              fore={{
                color: {
                  light: { default: { name: "yellow", lightness: 20 } },
                  dark: { default: { name: "yellow", lightness: 80 } },
                },
              }}
              spacing={{ padding: { y: 0.5 } }}
            >
              {"主戦場について"}
            </Heading>
            <Div>
              <Paragraph>
                {
                  "基本的に、「指揮」をしてVCをしている方の指示に従ってください。"
                }
              </Paragraph>
              <Paragraph>
                {"作戦は流動的なため、臨機応変に対応いただけると助かります。"}
              </Paragraph>
            </Div>
          </Section>
          <Section spacing={{ padding: { y: 0.5 } }}>
            <Heading
              level={3}
              fore={{
                color: {
                  light: { default: { name: "yellow", lightness: 20 } },
                  dark: { default: { name: "yellow", lightness: 80 } },
                },
              }}
              spacing={{ padding: { y: 0.5 } }}
            >
              {"副戦場について"}
            </Heading>
            <Div>
              <Paragraph>
                {
                  "基本的には団長追尾は雑魚狩り、それ以外の動ける方は石運びをお願いしています。"
                }
              </Paragraph>
              <Paragraph>
                {
                  "石の提出はタイミングが要なので、提出のクールタイムについては必ず確認して提出してください。"
                }
              </Paragraph>
              <Paragraph>
                {
                  "主戦場でたおされた味方が、副戦場に運ばれることがあります。救護班は救護に向かってください。"
                }
              </Paragraph>
            </Div>
          </Section>
        </Section>
      </BasicContainer>
    </AuthorizedLayout>
  );
}
