import { BasicContainer } from "@/components/BasicContainer";
import MainVisual from "@/components/MainVisual";
import { MinolithLink } from "@/components/MinolithLink";
import TweetsByAzurea from "@/components/TweetsByAzurea";
import AppConfig from "@/configurations/app.config";
import RoutePath from "@/constants/RoutePath";
import JsonLDInformarions from "@/data/JsonLDInformarions";
import CommonLayout from "@/layouts/CommonLayout";
import { Info } from "@mui/icons-material";
import { Metadata } from "next";
import {
  Div,
  Message,
  MessageBody,
  MessageHeader,
  Paragraph,
  Section,
} from "react-minolith";
import { WithContext, Thing } from "schema-dts";

interface AlertInfo {
  date: string;
  content: React.ReactNode;
}

const TITLE = "Absolve@AZUREA-空の唄-";
const DESCRIPTION = "「AZUREA-空の唄-」のギルド「Absolve」のページです。";

const jsonLDs: WithContext<Thing>[] = [
  {
    "@context": "https://schema.org",
    ...JsonLDInformarions.WEBSITE_AZUREA_ABSOLVE,
  },
  {
    "@context": "https://schema.org",
    ...JsonLDInformarions.WEBPAGE_AZUREA_ABSOLVE,
    headline: TITLE,
    description: DESCRIPTION,
    url: AppConfig.BASE_URL,
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Absolve@AZUREA-空の唄-",
        item: `${AppConfig.BASE_URL}`,
      },
    ],
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function IndexPage() {
  const alertInfos: AlertInfo[] = [
    {
      date: "2025-03-20",
      content: (
        <>
          <Paragraph>
            {`雲垂姫のイベント曜日が月曜日に変更となったため、`}
            <MinolithLink href={RoutePath.RULE_BASIC}>
              {"基本ルール"}
            </MinolithLink>
            {"に反映しました。"}
          </Paragraph>
        </>
      ),
    },
    {
      date: "2025-03-16",
      content: (
        <>
          <Paragraph>
            {"ギルドアンケートの結果を"}
            <MinolithLink href={RoutePath.RULE_BASIC}>
              {"基本ルール"}
            </MinolithLink>
            {"に反映しました。"}
          </Paragraph>
          <Paragraph>
            {`イベント開始時間が変更になっています。ご確認お願いします。`}
          </Paragraph>
        </>
      ),
    },
    {
      date: "2025-03-16",
      content: (
        <>
          <Paragraph>
            <MinolithLink href={RoutePath.SURVEY_2025_02_28_GUILD_SURVEY}>
              {"ギルドアンケート"}
            </MinolithLink>
            {"回答を締め切りました。"}
          </Paragraph>
          <Paragraph>{`ご協力ありがとうございました。`}</Paragraph>
        </>
      ),
    },
    {
      date: "2025-02-28",
      content: (
        <>
          <Paragraph>
            {"本ページの素材として利用できるゲームのSSを募集しています。"}
          </Paragraph>
          <Paragraph>
            {
              "使ってもいいよ～なSSがある方はギルドのディスコの「クリップとハイライト」に投稿おねがいします"
            }
          </Paragraph>
        </>
      ),
    },
    {
      date: "2024-07-26",
      content: (
        <>
          <Paragraph>
            {`ギルドイベントのアイディア募集をしています。`}
          </Paragraph>
          <Paragraph>
            {`回答は`}
            <MinolithLink
              href={"https://forms.gle/MceiKtuJSANtkfqP8"}
              target="_blank"
              rel="noopener noreferrer"
            >{`こちら`}</MinolithLink>
            {`。`}
          </Paragraph>
        </>
      ),
    },
  ];

  return (
    <CommonLayout id="index" jsonLDs={jsonLDs}>
      <BasicContainer>
        {alertInfos.length > 0 && (
          <Section spacing={{ padding: { y: 0.5 } }}>
            <Message colorName="blue">
              <MessageHeader>
                <Info fontSize="inherit" />
                {"お知らせ"}
              </MessageHeader>
              <MessageBody>
                {alertInfos.map((alertInfo, index) => {
                  return (
                    <Section key={index} spacing={{ padding: { y: 0.5 } }}>
                      <Div
                        border={{
                          style: "solid",
                          width: "medium",
                          radius: "medium",
                          color: {
                            light: {
                              default: { name: "blue", lightness: 30 },
                            },
                            dark: {
                              default: { name: "blue", lightness: 70 },
                            },
                          },
                        }}
                        spacing={{ padding: 0.5 }}
                      >
                        <Div
                          fore={{
                            fontWeight: "semibold",
                            color: {
                              light: {
                                default: { name: "gray", lightness: 10 },
                              },
                              dark: {
                                default: { name: "gray", lightness: 90 },
                              },
                            },
                          }}
                          spacing={{ padding: { y: 0.25 } }}
                        >
                          {`${alertInfo.date}`}
                        </Div>
                        <Div spacing={{ padding: { y: 0.25 } }}>
                          {alertInfo.content}
                        </Div>
                      </Div>
                    </Section>
                  );
                })}
              </MessageBody>
            </Message>
          </Section>
        )}
        <Section spacing={{ padding: { y: 0.5 } }}>
          <MainVisual />
        </Section>
        <Section
          spacing={{ padding: { y: 0.5 } }}
          className="section-azurea-timeline"
        >
          <TweetsByAzurea />
        </Section>
      </BasicContainer>
    </CommonLayout>
  );
}
