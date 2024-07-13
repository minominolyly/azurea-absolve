import CommonLayout from "@/layouts/CommonLayout";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";
import { Metadata } from "next";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import AzureaCoordinate from "@/components/AzureaCoordinate";
import Image from "next/image";
import AppConfig from "@/configurations/app.config";

const TITLE = "冒険 - 浮雲の狐宮";

export const metadata: Metadata = {
  title: TITLE,
  openGraph: {
    title: TITLE,
  },
};

export default function FuunNoKokyuPage() {
  return (
    <CommonLayout title={TITLE}>
      <Container className="container">
        <section>
          <h1>{TITLE}</h1>
        </section>
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
              <Box
                sx={{
                  marginTop: 0.5,
                  marginBottom: 0.5,
                  borderRadius: "0.25rem",
                  borderWidth: "0.025rem",
                  borderColor: "var(--color-gray-50)",
                  borderStyle: "solid",
                  minWidth: "26.5rem",
                }}
              >
                <AzureaCoordinate
                  area="浮雲の狐宮"
                  x={985}
                  y={973}
                  note={"探査で出る"}
                />
                <Box
                  sx={{
                    margin: 1,
                  }}
                >
                  <Image
                    src={`${AppConfig.BASE_URL}/images/guide/adventure/fuun-no-kokyuu/rune-1.png`}
                    alt={`rune 1`}
                    height={720}
                    width={1280}
                    style={{
                      height: "auto",
                      width: "100%",
                    }}
                    loading="lazy"
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  p: 1,
                  borderRadius: "0.25rem",
                  borderWidth: "0.025rem",
                  borderColor: "var(--color-gray-50)",
                  borderStyle: "solid",
                }}
              >
                <AzureaCoordinate
                  area="浮雲の狐宮"
                  x={1545}
                  y={924}
                  note={"探査で出る"}
                />
                <Box
                  sx={{
                    margin: 1,
                  }}
                >
                  <Image
                    src={`${AppConfig.BASE_URL}/images/guide/adventure/fuun-no-kokyuu/rune-2.png`}
                    alt={`rune 1`}
                    height={720}
                    width={1280}
                    style={{
                      height: "auto",
                      width: "100%",
                    }}
                    loading="lazy"
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  p: 1,
                  borderRadius: "0.25rem",
                  borderWidth: "0.025rem",
                  borderColor: "var(--color-gray-50)",
                  borderStyle: "solid",
                }}
              >
                <AzureaCoordinate
                  area="浮雲の狐宮"
                  x={1340}
                  y={1317}
                  note={"探査で出る"}
                />
                <Box
                  sx={{
                    margin: 1,
                  }}
                >
                  <Image
                    src={`${AppConfig.BASE_URL}/images/guide/adventure/fuun-no-kokyuu/rune-3.png`}
                    alt={`rune 1`}
                    height={720}
                    width={1280}
                    style={{
                      height: "auto",
                      width: "100%",
                    }}
                    loading="lazy"
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  p: 1,
                  borderRadius: "0.25rem",
                  borderWidth: "0.025rem",
                  borderColor: "var(--color-gray-50)",
                  borderStyle: "solid",
                }}
              >
                <AzureaCoordinate
                  area="浮雲の狐宮"
                  x={1277}
                  y={981}
                  note={"探査で出る"}
                />
                <Box
                  sx={{
                    margin: 1,
                  }}
                >
                  <Image
                    src={`${AppConfig.BASE_URL}/images/guide/adventure/fuun-no-kokyuu/rune-4.png`}
                    alt={`rune 1`}
                    height={720}
                    width={1280}
                    style={{
                      height: "auto",
                      width: "100%",
                    }}
                    loading="lazy"
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  p: 1,
                  borderRadius: "0.25rem",
                  borderWidth: "0.025rem",
                  borderColor: "var(--color-gray-50)",
                  borderStyle: "solid",
                }}
              >
                <AzureaCoordinate
                  area="浮雲の狐宮"
                  x={1295}
                  y={634}
                  note={"探査で出る"}
                />
                <Box
                  sx={{
                    margin: 1,
                  }}
                >
                  <Image
                    src={`${AppConfig.BASE_URL}/images/guide/adventure/fuun-no-kokyuu/rune-5.png`}
                    alt={`rune 1`}
                    height={720}
                    width={1280}
                    style={{
                      height: "auto",
                      width: "100%",
                    }}
                    loading="lazy"
                  />
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </CommonLayout>
  );
}
