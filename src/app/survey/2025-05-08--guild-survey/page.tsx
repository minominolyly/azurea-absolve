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

const TITLE = "2025-05-08 ギルドアンケート";
const DESCRIPTION = "2025年05月08日度のギルドアンケートです。";
const EYECATCH = `${AppConfig.BASE_URL}/images/survey/2025-05-08--guild-survey/eyecatch.png`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [EYECATCH],
  },
};

export default function GuildSurvey20250508Page() {
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
                <MinolithLink href={RoutePath.SURVEY}>
                  {"アンケート"}
                </MinolithLink>
              </Breadcrumb>
              <Breadcrumb>{TITLE}</Breadcrumb>
            </Breadcrumbs>
          </BreadcrumbsNav>
        </Section>
        <Section spacing={{ padding: { y: 0.5 } }}>
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
        {/* <Section spacing={{ padding: { y: 1 } }}>
          <Message colorName="yellow">
            <MessageHeader>
              <Span spacing={{ padding: { right: 0.5 } }}>
                <FaCircleInfo />
              </Span>
              {"回答締め切り"}
            </MessageHeader>
            <MessageBody>
              <Paragraph>
                {"アンケートは終了しました。ご協力ありがとうございました。"}
              </Paragraph>
            </MessageBody>
          </Message>
        </Section> */}
        <Section spacing={{ padding: { y: 0.5 } }}>
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
        <Section spacing={{ padding: { y: 0.5 } }}>
          <Div>
            <Heading
              level={2}
              fore={{
                color: {
                  light: { default: { name: "yellow", lightness: 20 } },
                  dark: { default: { name: "yellow", lightness: 80 } },
                },
              }}
            >
              {"結果"}
            </Heading>
          </Div>
          <Section spacing={{ padding: { y: 1 } }}>
            <Heading
              level={3}
              fore={{
                color: {
                  light: { default: { name: "yellow", lightness: 20 } },
                  dark: { default: { name: "yellow", lightness: 80 } },
                },
              }}
            >
              {"雲垂姫の時間"}
            </Heading>
            <Div spacing={{ padding: { y: 0.5 } }}>
              <Paragraph
                fore={{
                  color: {
                    light: { default: { name: "red", lightness: 20 } },
                    dark: { default: { name: "red", lightness: 80 } },
                  },
                  fontSize: "large",
                }}
              >
                {"聖翼退治と隔週実施のため、水着イベント終了直後（月曜日の20:45分頃開始）の実施とします。"}
              </Paragraph>
            </Div>
          </Section>
          <Section spacing={{ padding: { y: 1 } }}>
            <Heading
              level={3}
              fore={{
                color: {
                  light: { default: { name: "yellow", lightness: 20 } },
                  dark: { default: { name: "yellow", lightness: 80 } },
                },
              }}
            >
              {"真空余燼の時間"}
            </Heading>
            <Div spacing={{ padding: { y: 0.5 } }}>
              <Paragraph
                fore={{
                  color: {
                    light: { default: { name: "red", lightness: 20 } },
                    dark: { default: { name: "red", lightness: 80 } },
                  },
                  fontSize: "large",
                }}
              >
                {"水着イベント終了直後（水曜日の20:45分頃開始）"}
              </Paragraph>
            </Div>
            <Div spacing={{ padding: { y: 0.5 } }}>
              <Centering>
                <Image
                  src={`${AppConfig.BASE_URL}/images/survey/2025-05-08--guild-survey/yojin.png`}
                  alt={`真空余燼の時間`}
                  height={325}
                  width={800}
                  style={{ height: "auto", width: "100%" }}
                  loading="lazy"
                />
              </Centering>
            </Div>
          </Section>
          <Section spacing={{ padding: { y: 1 } }}>
            <Heading
              level={3}
              fore={{
                color: {
                  light: { default: { name: "yellow", lightness: 20 } },
                  dark: { default: { name: "yellow", lightness: 80 } },
                },
              }}
            >
              {"アイドルの時間"}
            </Heading>
            <Div spacing={{ padding: { y: 0.5 } }}>
              <Paragraph
                fore={{
                  color: {
                    light: { default: { name: "red", lightness: 20 } },
                    dark: { default: { name: "red", lightness: 80 } },
                  },
                  fontSize: "large",
                }}
              >
                {"水着イベント直後（金曜日の20:45分頃開始）"}
              </Paragraph>
            </Div>
            <Div spacing={{ padding: { y: 0.5 } }}>
              <Centering>
                <Image
                  src={`${AppConfig.BASE_URL}/images/survey/2025-05-08--guild-survey/idol.png`}
                  alt={`アイドルの時間`}
                  height={325}
                  width={800}
                  style={{ height: "auto", width: "100%" }}
                  loading="lazy"
                />
              </Centering>
            </Div>
          </Section>
          <Section spacing={{ padding: { y: 1 } }}>
            <Heading
              level={3}
              fore={{
                color: {
                  light: { default: { name: "yellow", lightness: 20 } },
                  dark: { default: { name: "yellow", lightness: 80 } },
                },
              }}
            >
              {"もしギルドイベントをやるとしたら"}
            </Heading>
            <Div spacing={{ padding: { y: 0.5 } }}>
              <Paragraph
                fore={{
                  color: {
                    light: { default: { name: "red", lightness: 20 } },
                    dark: { default: { name: "red", lightness: 80 } },
                  },
                  fontSize: "large",
                }}
              >
                {"水曜日の22時頃、土曜日の領土戦のあと"}
              </Paragraph>
            </Div>
            <Div spacing={{ padding: { y: 0.5 } }}>
              <Centering>
                <Image
                  src={`${AppConfig.BASE_URL}/images/survey/2025-05-08--guild-survey/guild-event-schedule.png`}
                  alt={`もしギルドイベントをやるとしたら`}
                  height={367}
                  width={800}
                  style={{ height: "auto", width: "100%" }}
                  loading="lazy"
                />
              </Centering>
            </Div>
          </Section>
          <Section spacing={{ padding: { y: 1 } }}>
            <Heading
              level={3}
              fore={{
                color: {
                  light: { default: { name: "yellow", lightness: 20 } },
                  dark: { default: { name: "yellow", lightness: 80 } },
                },
              }}
            >
              {"レイドの管理者について"}
            </Heading>
            <Div spacing={{ padding: { y: 0.5 } }}>
              <Centering>
                <Image
                  src={`${AppConfig.BASE_URL}/images/survey/2025-05-08--guild-survey/raid.png`}
                  alt={`レイドの管理者について`}
                  height={367}
                  width={800}
                  style={{ height: "auto", width: "100%" }}
                  loading="lazy"
                />
              </Centering>
            </Div>
          </Section>
          <Section spacing={{ padding: { y: 1 } }}>
            <Heading
              level={3}
              fore={{
                color: {
                  light: { default: { name: "yellow", lightness: 20 } },
                  dark: { default: { name: "yellow", lightness: 80 } },
                },
              }}
            >
              {"レイドのパーティーについて（なにかあれば）"}
            </Heading>
            <Div spacing={{ padding: { y: 0.5 } }}>
              <Paragraph
                fore={{
                  color: {
                    light: { default: { name: "red", lightness: 20 } },
                    dark: { default: { name: "red", lightness: 80 } },
                  },
                  fontSize: "large",
                }}
              >
                {
                  "いくつかご意見をいただいておりますので、Discordで継続検討します。"
                }
              </Paragraph>
            </Div>
          </Section>
          <Section spacing={{ padding: { y: 1 } }}>
            <Heading
              level={3}
              fore={{
                color: {
                  light: { default: { name: "yellow", lightness: 20 } },
                  dark: { default: { name: "yellow", lightness: 80 } },
                },
              }}
            >
              {"ギルド戦の作戦について（なにかあれば）"}
            </Heading>
            <Div spacing={{ padding: { y: 0.5 } }}>
              <Paragraph
                fore={{
                  color: {
                    light: { default: { name: "red", lightness: 20 } },
                    dark: { default: { name: "red", lightness: 80 } },
                  },
                  fontSize: "large",
                }}
              >
                {
                  "こちらもディスコで継続検討します。"
                }
              </Paragraph>
            </Div>
          </Section>
          <Section spacing={{ padding: { y: 1 } }}>
            <Heading
              level={3}
              fore={{
                color: {
                  light: { default: { name: "yellow", lightness: 20 } },
                  dark: { default: { name: "yellow", lightness: 80 } },
                },
              }}
            >
              {"領土戦の作戦ついて（なにかあれば）"}
            </Heading>
            <Div spacing={{ padding: { y: 0.5 } }}>
              <Paragraph
                fore={{
                  color: {
                    light: { default: { name: "red", lightness: 20 } },
                    dark: { default: { name: "red", lightness: 80 } },
                  },
                  fontSize: "large",
                }}
              >
                {"基本現状維持としますが、現在テスト運用中のDiscordのVCの活用も継続検討します。"}
              </Paragraph>
            </Div>
          </Section>
          <Section spacing={{ padding: { y: 1 } }}>
            <Heading
              level={3}
              fore={{
                color: {
                  light: { default: { name: "yellow", lightness: 20 } },
                  dark: { default: { name: "yellow", lightness: 80 } },
                },
              }}
            >
              {"ディスコードの運用について（おもにVCについて）"}
            </Heading>
            <Div spacing={{ padding: { y: 0.5 } }}>
              <Paragraph
                fore={{
                  color: {
                    light: { default: { name: "red", lightness: 20 } },
                    dark: { default: { name: "red", lightness: 80 } },
                  },
                  fontSize: "large",
                }}
              >
                {"あったほうがいいという意見が増えてきたので、継続でテスト的に運用します。"}
              </Paragraph>
              <Paragraph
                fore={{
                  color: {
                    light: { default: { name: "red", lightness: 20 } },
                    dark: { default: { name: "red", lightness: 80 } },
                  },
                  fontSize: "large",
                }}
              >
                {"意見等あればDiscordやゲーム内チャット等でお知らせください。"}
              </Paragraph>
            </Div>
            <Div spacing={{ padding: { y: 0.5 } }}>
              <Centering>
                <Image
                  src={`${AppConfig.BASE_URL}/images/survey/2025-05-08--guild-survey/discord-vc.png`}
                  alt={`ディスコードの運用、VCについて`}
                  height={440}
                  width={800}
                  style={{ height: "auto", width: "100%" }}
                  loading="lazy"
                />
              </Centering>
            </Div>
          </Section>
          <Section spacing={{ padding: { y: 1 } }}>
            <Heading
              level={3}
              fore={{
                color: {
                  light: { default: { name: "yellow", lightness: 20 } },
                  dark: { default: { name: "yellow", lightness: 80 } },
                },
              }}
            >
              {"ディスコードの運用について（その他）"}
            </Heading>
            <Div spacing={{ padding: { y: 0.5 } }}>
              <Paragraph
                fore={{
                  color: {
                    light: { default: { name: "red", lightness: 20 } },
                    dark: { default: { name: "red", lightness: 80 } },
                  },
                  fontSize: "large",
                }}
              >
                {"基本、現状維持とします。"}
              </Paragraph>
              <Paragraph
                fore={{
                  color: {
                    light: { default: { name: "red", lightness: 20 } },
                    dark: { default: { name: "red", lightness: 80 } },
                  },
                  fontSize: "large",
                }}
              >
                {"アンケートについて、個別でチャンネル作成してほしいとの意見がありましたが、アンケートの頻度があまり高くないので一旦保留とさせていただきます。"}
              </Paragraph>
            </Div>
          </Section>
          <Section spacing={{ padding: { y: 1 } }}>
            <Heading
              level={3}
              fore={{
                color: {
                  light: { default: { name: "yellow", lightness: 20 } },
                  dark: { default: { name: "yellow", lightness: 80 } },
                },
              }}
            >
              {"その他のご意見"}
            </Heading>
            <Div spacing={{ padding: { y: 0.5 } }}>
              <Div
                fore={{
                  color: {
                    light: { default: { name: "red", lightness: 20 } },
                    dark: { default: { name: "red", lightness: 80 } },
                  },
                  fontSize: "large",
                }}
              >
                <Paragraph>
                  {"いろいろありがとうございます。参考にさせていただきます。"}
                </Paragraph>
              </Div>
            </Div>
          </Section>
        </Section>
        <Section spacing={{ padding: { y: 1 } }}>
          <Div
            spacing={{ padding: { y: 1 } }}
            border={{
              style: "solid",
              width: "medium",
              color: {
                light: { default: { name: "gray", lightness: 30 } },
                dark: { default: { name: "gray", lightness: 70 } },
              },
            }}
          >
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSd__JqvipVfAoF0cR_S7MdZnXp2RZvYUilYQaCasl3d9cK2Ew/viewform?embedded=true"
              width="640"
              height="640"
              style={{
                width: "100%",
                border: "none",
              }}
            >
              読み込んでいます…
            </iframe>
          </Div>
        </Section>
      </BasicContainer>
    </AuthorizedLayout>
  );
}
