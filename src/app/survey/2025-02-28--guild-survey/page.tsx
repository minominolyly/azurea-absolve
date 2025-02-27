import { BasicContainer } from "@/components/BasicContainer";
import Highlighter from "@/components/Highlighter";
import AppConfig from "@/configurations/app.config";
import CommonLayout from "@/layouts/CommonLayout";
import { Metadata } from "next";
import Image from "next/image";
import { FaTriangleExclamation } from "react-icons/fa6";
import {
  Centering,
  Div,
  Heading,
  Message,
  MessageBody,
  MessageHeader,
  Paragraph,
  Section,
  Span,
} from "react-minolith";

const TITLE = "2025-02-28 ギルドアンケート";
const DESCRIPTION = "2025年02月28日度のギルドアンケートです。";
const EYECATCH = `${AppConfig.BASE_URL}/images/survey/2025-02-28--guild-survey/eyecatch.png`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [EYECATCH],
  },
};

export default function GuildSurvey20250228Page() {
  return (
    <CommonLayout id={TITLE}>
      <BasicContainer>
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
        <Section spacing={{ padding: { y: 0.5 } }}>
          <Message colorName="yellow">
            <MessageHeader>
              <Span spacing={{ padding: { right: 0.5 } }}>
                <FaTriangleExclamation />
              </Span>
              {"注意"}
            </MessageHeader>
            <MessageBody>
              <Paragraph>
                {"回答期限は"}
                <Highlighter colorName="red">{"2025/03/14まで"}</Highlighter>
                {"です。"}
              </Paragraph>
            </MessageBody>
          </Message>
        </Section>
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
        {/* <Section spacing={{ padding: { y: 0.5 } }}>
          <Box sx={{ padding: "1rem 0" }}>
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
            <Section>
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
            </Section>
            <Section>
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
            </Section>
            <Section>
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
            </Section>
            <Section>
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
            </Section>
            <Section>
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
            </Section>
            <Section>
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
            </Section>
            <Section>
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
            </Section>
            <Section>
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
            </Section>
            <Section>
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
            </Section>
            <Section>
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
            </Section>
          </Box>
        </Section> */}
        <Section spacing={{ padding: { y: 0.5 } }}>
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
              src="https://docs.google.com/forms/d/e/1FAIpQLSeRXM46F3Ivht_JAppslEJgk8tq3ffEGRtuwxfeN4pSMJYjdQ/viewform?embedded=true"
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
    </CommonLayout>
  );
}
