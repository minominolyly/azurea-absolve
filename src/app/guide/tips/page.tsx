import { BasicContainer } from "@/components/BasicContainer";
import TipsHowToRead from "@/components/TipsHowToRead";
import CommonLayout from "@/layouts/CommonLayout";
import { Metadata } from "next";

const TITLE = "マメ知識";

export const metadata: Metadata = {
  title: TITLE,
  openGraph: {
    title: TITLE,
  },
};

export default function GuideTipsPage() {
  return (
    <CommonLayout id={TITLE}>
      <BasicContainer>
        <section>
          <h1 style={{ color: "var(--color-yellow-50)" }}>{"マメ知識"}</h1>
        </section>
        <section>
          <h2>
            <span>読み方</span>
          </h2>
          <TipsHowToRead />
        </section>
      </BasicContainer>
    </CommonLayout>
  );
}
