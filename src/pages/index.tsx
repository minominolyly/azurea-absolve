import CommonLayout from "@/layouts/CommonLayout";
import { Container } from "@mui/material";
import Image from "next/image";

export default function IndexPage() {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://minominolyly.github.io/azurea-absolve"
      : "http://localhost:3000";

  return (
    <CommonLayout title="Absolve@海神の眼.AZUREA-空の唄-">
      <Container>
        <section>
          <h1>{"Absolve"}</h1>
        </section>
        <section>
          <Image
            src={`${baseUrl}/images/ss-1.png`}
            alt={`ss 1`}
            height={720}
            width={1280}
            style={{ height: "auto", width: "100%" }}
            loading="lazy"
          />
        </section>
      </Container>
    </CommonLayout>
  );
}
