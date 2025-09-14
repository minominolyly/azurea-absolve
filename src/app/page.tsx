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
      date: "2025-09-15",
      content: (
        <>
          <Paragraph>
            {"基本ルールを整理しました。"}
          </Paragraph>
          <Paragraph>
            {"内容はほとんど変わっていませんが、制限事項について追記しました。"}
          </Paragraph>
          <Paragraph>
            <MinolithLink href={RoutePath.RULE_BASIC}>
              {"こちらのページ"}
            </MinolithLink>
            {"に記載しております。"}
          </Paragraph>
        </>
      ),
    },
    {
      date: "2025-09-15",
      content: (
        <>
          <Paragraph>
            {"王城戦のアブソルブの王室割当方針を記載しました。"}
          </Paragraph>
          <Paragraph>
            <MinolithLink href={RoutePath.RULE_ROYAL_CASTLE_BATTLE}>
              {"こちらのページ"}
            </MinolithLink>
            {"に記載しております。"}
          </Paragraph>
          <Paragraph>
            {"草案段階なので、また変更があれば記載します。"}
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
          className="section-azurea-timeline"
          spacing={{ padding: { y: 0.5 } }}
        >
          <TweetsByAzurea />
        </Section>
      </BasicContainer>
    </CommonLayout>
  );
}
