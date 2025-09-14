import { BasicContainer } from "@/components/BasicContainer";
import { MinolithLink } from "@/components/MinolithLink";
import AppConfig from "@/configurations/app.config";
import RoutePath from "@/constants/RoutePath";
import AuthorizedLayout from "@/layouts/AuthorizedLayout";
import { Metadata } from "next";
import Image from "next/image";
import {
  Blockquote,
  Breadcrumb,
  Breadcrumbs,
  BreadcrumbsNav,
  Centering,
  Column,
  Columns,
  Div,
  Heading,
  Label,
  Message,
  MessageBody,
  MessageHeader,
  Paragraph,
  Section,
} from "react-minolith";

const TITLE = "王城戦";
const EYECATCH = `${AppConfig.BASE_URL}/images/rule/royal-castle-battle/eyecatch.png`;

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
            {"王城戦について"}
          </Heading>
          <Div spacing={{ padding: { y: 0.5 } }}>
            <Paragraph>{"以下、公式の一部引用。"}</Paragraph>
            <Paragraph>
              <MinolithLink href="https://azurea.zlongame.co.jp/jx/azureaNotice/20250226/4533.html">
                {"公式はこちら。"}
              </MinolithLink>
            </Paragraph>
          </Div>
          <Div spacing={{ padding: { y: 0.5 } }}>
            <Blockquote>
              <Paragraph>
                {"三陣営が星海城のクリスタルを巡って争奪戦を繰り広げる。"}
              </Paragraph>
              <Paragraph>
                {"三つの陣営は攻め側と占領側に分かれ、それぞれ独自に戦います。"}
              </Paragraph>
              <Paragraph>
                {
                  "攻め側は外城から始まり、城門を破り、最終的に「クリスタル」を破壊し占領する必要があります。"
                }
              </Paragraph>
              <Paragraph>
                {
                  "占領側は城門や地形の利点を活かして、「クリスタル」を守り抜かなければなりません。"
                }
              </Paragraph>
              <Paragraph>
                {
                  "占領側は城門操作権限やクリスタルの祝福バフなどの加護を受け、優位に立ちます。攻め側は数の優位で攻め入ろう！"
                }
              </Paragraph>
              <Paragraph>
                {
                  "「クリスタル」を占領した陣営が勝利し、自動的に次週の占領側となります。"
                }
              </Paragraph>
              <Paragraph>
                {
                  "星海城を占領した陣営のリーダーは星海の主となり、統治期間中は専用の豪華特効称号、限定の翼スキンを獲得できます。"
                }
              </Paragraph>
              <Paragraph>
                {
                  "さらに税制の制定、王室の人事采配、報酬の分配などの特権を持ちます。"
                }
              </Paragraph>
            </Blockquote>
          </Div>
          <Div spacing={{ padding: { y: 0.5 } }}>
            <Blockquote>
              <Paragraph>
                {"王城戦では陣営の戦術や作戦がより重要になります。"}
              </Paragraph>
              <Paragraph>
                {
                  "主戦場の参加人数には制限があり、冒険者は戦力ランキングに基づいて入場するため、主戦場に入れるのは全サーバーでも名高い強者ばかりです。"
                }
              </Paragraph>
              <Paragraph>
                {
                  "簡単に言えば、天地を揺るがすほどの実力でもない限り、たった一人の戦力だけで勝敗を決めることはできません。"
                }
              </Paragraph>
              <Paragraph>
                {
                  "城門や城壁などの建築物をうまく活用して戦略を立てれば、劣勢でも強敵を打ち破り、逆転勝利を狙うことができます。"
                }
              </Paragraph>
              <Paragraph
                fore={{
                  color: {
                    light: { default: { name: "red", lightness: 20 } },
                    dark: { default: { name: "red", lightness: 80 } },
                  },
                }}
              >
                {
                  "ランダムにマップに出現する「伝説の書の力」は、自陣を強化するため、必ず確保しましょう！"
                }
              </Paragraph>
              <Paragraph>
                {
                  "さらに、王城戦では戦いの中で得た資源を活用し、陣営を強化し続けることができます。"
                }
              </Paragraph>
              <Paragraph>
                {"そのため、開幕戦が勝敗のカギを握ります。"}
              </Paragraph>
            </Blockquote>
          </Div>
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
            {"王室の割当について"}
          </Heading>
          <Section spacing={{ padding: { y: 0.5 } }}>
            <Message colorName="yellow">
              <MessageHeader>{"⚠️注意事項"}</MessageHeader>
              <MessageBody>
                {"検討中につき、変わる可能性大。まだ草案段階。"}
              </MessageBody>
            </Message>
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
              {"概要"}
            </Heading>
            <Div>
              <Paragraph>{"基本的に王室は"}</Paragraph>
              <ul>
                <li>{"1位ギルドのキーマン"}</li>
                <li>
                  {"バフを誰に割り当てれば、次の王城戦でも勝利陣営となれるか"}
                </li>
              </ul>
              <Paragraph>{"を基準に選定。"}</Paragraph>
              <Paragraph>
                {"順位は「王城戦 > 陣営」の個人の順位を参照。"}
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
              {"席の割当"}
            </Heading>
            <Div>
              <Columns>
                <Column size={12}>
                  <Label>{"【元帥】"}</Label>
                </Column>
                <Column size={12}>
                  <ul>
                    <li>{"副会長セレクト"}</li>
                  </ul>
                </Column>
              </Columns>
              <Columns>
                <Column size={12}>
                  <Label>{"【枢機卿】"}</Label>
                </Column>
                <Column size={12}>
                  <ul>
                    <li>{"副会長セレクト"}</li>
                  </ul>
                </Column>
              </Columns>
              <Columns>
                <Column size={12}>
                  <Div>
                    <Label>{"【宰相】"}</Label>
                  </Div>
                </Column>
                <Column size={12}>
                  <ul>
                    <li>{"副会長セレクト"}</li>
                  </ul>
                </Column>
              </Columns>
              <Columns>
                <Column size={12}>
                  <Label>{"【将軍】"}</Label>
                </Column>
                <Column size={12}>
                  <ul>
                    <li>{"副会長セレクト"}</li>
                    <li>{"副会長セレクト"}</li>
                    <li>{"陣営 撃破順位 1位, 2位"}</li>
                    <li>{"陣営 ダメージ順位 1位, 2位"}</li>
                    <li>{"陣営 アシスト順位 1位, 2位"}</li>
                    <li>{"陣営 回復量順位 1位, 2位"}</li>
                  </ul>
                </Column>
              </Columns>
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
              {"備考"}
            </Heading>
            <Div>
              <Paragraph>
                {
                  "重複したメンバーがいる場合は、順位の2位以下から順にアサインする。"
                }
              </Paragraph>
            </Div>
          </Section>
        </Section>
      </BasicContainer>
    </AuthorizedLayout>
  );
}
