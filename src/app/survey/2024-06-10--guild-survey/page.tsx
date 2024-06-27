import AppConfig from "@/configurations/app.config";
import CommonLayout from "@/layouts/CommonLayout";
import { Alert, AlertTitle, Box, Container, Link } from "@mui/material";
import Image from "next/image";
import { Metadata } from "next";
import { Info } from "@mui/icons-material";

const TITLE = "2024-06-10 ギルドアンケート";

export const metadata: Metadata = {
  title: TITLE,
};

export default function IndexPage() {
  return (
    <CommonLayout title={TITLE}>
      <Container className="container">
        <section>
          <h1>{TITLE}</h1>
        </section>
        <section>
          <Box sx={{ padding: "1rem 0" }}>
            <Alert
              variant="filled"
              severity={"warning"}
              icon={<Info fontSize="inherit" />}
            >
              {"アンケートは終了しました。ご協力ありがとうございました。"}
            </Alert>
          </Box>
        </section>
        <section>
          <Box sx={{ padding: "1rem 0" }}>
            <div>
              <h2>{"結果"}</h2>
            </div>
            <section>
              <h3>{"真空余燼の時間"}</h3>
              <ul>
                <li>
                  {"いまのままでいい（水曜日の21:45分開始）"}
                </li>
              </ul>
              <Image
                src={`${AppConfig.BASE_URL}/images/survey/2024-06-10--guild-survey/shinku-yojin.png`}
                alt={`真空余燼の時間`}
                height={720}
                width={1280}
                style={{ height: "auto", width: "100%" }}
                loading="lazy"
              />
            </section>
            <section>
              <h3>{"アイドルの時間"}</h3>
              <ul>
                <li>
                  {"いまのままでいい（金曜日の21:45分開始）"}
                </li>
              </ul>
              <Image
                src={`${AppConfig.BASE_URL}/images/survey/2024-06-10--guild-survey/idol.png`}
                alt={`アイドルの時間`}
                height={720}
                width={1280}
                style={{ height: "auto", width: "100%" }}
                loading="lazy"
              />
            </section>
            <section>
              <h3>{"もしギルドイベントをやるとしたら"}</h3>
              <ul>
                <li>
                  {"1.土曜日の領土戦のあと"}
                </li>
                <li>
                  {"2.火曜日の魂域のあと（同票2位）"}
                </li>
                <li>
                  {"2.木曜日の水着祭典のあと（同票2位）"}
                </li>
              </ul>
            </section>
            <section>
              <h3>{"レイドの管理者について"}</h3>
              <ul>
                <li>
                  {"管理者をやってもいいと言ってくださる方が20%います。たすかります！"}
                </li>
              </ul>
              <Image
                src={`${AppConfig.BASE_URL}/images/survey/2024-06-10--guild-survey/raid-admin.png`}
                alt={`レイドの管理者について`}
                height={720}
                width={1280}
                style={{ height: "auto", width: "100%" }}
                loading="lazy"
              />
            </section>
            <section>
              <h3>{"レイドのパーティーについて（なにかあれば）"}</h3>
              <ul>
                <li>
                  {"基本、現状維持とします。"}
                </li>
              </ul>
            </section>
            <section>
              <h3>{"ギルド戦の作戦について（なにかあれば）"}</h3>
              <ul>
                <li>
                  {"基本、現状維持とします。"}
                </li>
              </ul>
            </section>
            <section>
              <h3>{"領土戦の作戦ついて（なにかあれば）"}</h3>
              <ul>
                <li>
                  {"基本、現状維持とします。"}
                </li>
              </ul>
            </section>
            <section>
              <h3>{"ディスコードの運用について（おもにVCについて）"}</h3>
              <ul>
                <li>
                  {"基本的にはVCは無しの方向とします"}
                </li>
              </ul>
            </section>
            <section>
              <h3>{"ディスコードの運用について（その他）"}</h3>
              <ul>
                <li>
                  {"近い内にイベント通知のやつを停止します。"}
                  {"多分通知がへるのでサーバー通知をオンにしてもいいかと思ってます。"}
                </li>
              </ul>
            </section>
            <section>
              <h3>{"その他のご意見"}</h3>
              <ul>
                <li>
                  {"役職募集中！！"}
                </li>
              </ul>
            </section>
          </Box>
        </section>

        <section>
          <Box sx={{padding: "1rem 0", border: "solid 0.1rem var(--color-gray-30)"}}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScWwjg3KahlP4DwHlzD6fx5jzqaPzom7pbYqt8Ca_87BlwliA/viewform?embedded=true"
              width="640"
              height="640"
              style={{
                width: "100%",
                border: "none"
              }}
            >
              読み込んでいます…
            </iframe>
          </Box>
        </section>
      </Container>
    </CommonLayout>
  );
}
