import AzureaCoordinate from "@/components/AzureaCoordinate";
import { BasicContainer } from "@/components/BasicContainer";
import { MinolithLink } from "@/components/MinolithLink";
import AppConfig from "@/configurations/app.config";
import RoutePath from "@/constants/RoutePath";
import CommonLayout from "@/layouts/CommonLayout";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { Metadata } from "next";
import Image from "next/image";
import {
  Breadcrumb,
  Breadcrumbs,
  BreadcrumbsNav,
  Card,
  CardBody,
  Div,
  Heading,
  Section,
} from "react-minolith";

const TITLE = "冒険 - 浮雲の狐宮";

export const metadata: Metadata = {
  title: TITLE,
  openGraph: {
    title: TITLE,
  },
};

export default function FuunNoKokyuPage() {
  const data = [
    {
      area: "浮雲の狐宮",
      x: 985,
      y: 973,
      note: "探査で出る",
      image: `${AppConfig.BASE_URL}/images/guide/adventure/fuun-no-kokyuu/rune-1.png`,
    },
    {
      area: "浮雲の狐宮",
      x: 1545,
      y: 924,
      note: "探査で出る",
      image: `${AppConfig.BASE_URL}/images/guide/adventure/fuun-no-kokyuu/rune-2.png`,
    },
    {
      area: "浮雲の狐宮",
      x: 1340,
      y: 1317,
      note: "探査で出る",
      image: `${AppConfig.BASE_URL}/images/guide/adventure/fuun-no-kokyuu/rune-3.png`,
    },
    {
      area: "浮雲の狐宮",
      x: 1277,
      y: 981,
      note: "探査で出る",
      image: `${AppConfig.BASE_URL}/images/guide/adventure/fuun-no-kokyuu/rune-4.png`,
    },
    {
      area: "浮雲の狐宮",
      x: 1295,
      y: 634,
      note: "探査で出る",
      image: `${AppConfig.BASE_URL}/images/guide/adventure/fuun-no-kokyuu/rune-5.png`,
    },
  ];
  return (
    <CommonLayout id={TITLE}>
      <BasicContainer>
        <Section spacing={{ padding: { y: 0.5 } }}>
          <BreadcrumbsNav>
            <Breadcrumbs>
              <Breadcrumb>
                <MinolithLink href={RoutePath.INDEX}>{"Top"}</MinolithLink>
              </Breadcrumb>
              <Breadcrumb>
                <MinolithLink href={RoutePath.GUIDE}>{"ガイド"}</MinolithLink>
              </Breadcrumb>
              <Breadcrumb>
                <MinolithLink href={RoutePath.GUIDE_ADVENTURE}>
                  {"冒険"}
                </MinolithLink>
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
        {/* <Section>
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
        </Section> */}
        <Box sx={{ m: 1 }}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="treasure-content"
              id="treasure-header"
            >
              <Typography component={"h2"}>{"狐宮お宝"}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <AzureaCoordinate area="浮雲の狐宮" x={932} y={713} />
              </Box>
              <Box>
                <AzureaCoordinate area="浮雲の狐宮" x={1116} y={590} />
              </Box>
              <Box>
                <AzureaCoordinate area="浮雲の狐宮" x={1173} y={452} />
              </Box>
              <Box>
                <AzureaCoordinate area="浮雲の狐宮" x={1128} y={744} />
              </Box>
              <Box>
                <AzureaCoordinate area="浮雲の狐宮" x={1265} y={988} />
              </Box>
              <Box>
                <AzureaCoordinate area="浮雲の狐宮" x={1266} y={931} />
              </Box>
              <Box>
                <AzureaCoordinate area="浮雲の狐宮" x={1327} y={895} />
              </Box>
              <Box>
                <AzureaCoordinate area="浮雲の狐宮" x={1418} y={433} />
              </Box>
              <Box>
                <AzureaCoordinate area="浮雲の狐宮" x={1663} y={892} />
              </Box>
              <Box>
                <AzureaCoordinate
                  area="浮雲の狐宮"
                  x={1238}
                  y={727}
                  note={"探査で出る"}
                />
              </Box>
              <Box>
                <AzureaCoordinate
                  area="浮雲の狐宮"
                  x={1338}
                  y={737}
                  note={"探査で出る"}
                />
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box sx={{ m: 1 }}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="rune-content"
              id="rune-header"
            >
              <Typography component={"h2"}>{"浮雲の狐宮 ルーン"}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {data.map((val) => (
                <Div
                  key={`${val.area}-${val.x}-${val.y}`}
                  spacing={{ padding: { y: 0.5 } }}
                >
                  <Card>
                    <CardBody>
                      <Div>
                        <AzureaCoordinate
                          area={val.area}
                          x={val.x}
                          y={val.y}
                          note={val.note}
                        />
                      </Div>
                      <Div spacing={{ padding: 1 }}>
                        <Image
                          src={val.image}
                          alt={`rune`}
                          height={720}
                          width={1280}
                          style={{
                            height: "auto",
                            width: "100%",
                          }}
                          loading="lazy"
                        />
                      </Div>
                    </CardBody>
                  </Card>
                </Div>
              ))}
            </AccordionDetails>
          </Accordion>
        </Box>
      </BasicContainer>
    </CommonLayout>
  );
}
