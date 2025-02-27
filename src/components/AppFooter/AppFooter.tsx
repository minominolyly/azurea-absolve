"use client";
import {
  Container,
  Div,
  Footer,
  Section,
  Span,
} from "react-minolith";
import AppFooterProps from "./AppFooterProps";
import { FaCookie, FaCopyright } from "react-icons/fa6";

export default function AppFooter(props: AppFooterProps) {
  return (
    <Footer
      back={{
        color: {
          light: {
            default: {
              name: "gray",
              lightness: 85,
            },
          },
          dark: {
            default: {
              name: "gray",
              lightness: 15,
            },
          },
        },
      }}
      spacing={{
        padding: { y: 0.5 },
      }}
    >
      {props.children && (
        <Section
          spacing={{
            padding: { y: 0.5 },
          }}
        >
          <Container>
            <Div spacing={{ padding: { x: 1 } }}>{props.children}</Div>
          </Container>
        </Section>
      )}
      <Section
        spacing={{
          padding: { y: 0.5 },
        }}
      >
        <Container>
          <Div spacing={{ padding: { x: 1 } }}>
            <Span
              fore={{
                color: {
                  light: {
                    default: {
                      name: "orange",
                      lightness: 60,
                    },
                  },
                  dark: {
                    default: {
                      name: "orange",
                      lightness: 70,
                    },
                  },
                },
              }}
            >
              <FaCookie />
            </Span>
            <Span
              fore={{
                color: {
                  light: {
                    default: {
                      name: "gray",
                      lightness: 35,
                    },
                  },
                  dark: {
                    default: {
                      name: "gray",
                      lightness: 70,
                    },
                  },
                },
              }}
            >
              {"このウェブサイトはCookieを利用しております"}
            </Span>
          </Div>
        </Container>
      </Section>
      <Section
        spacing={{
          padding: { y: 0.5 },
        }}
      >
        <Container>
          <Div spacing={{ padding: { x: 1 } }}>
            <Span
              fore={{
                color: {
                  light: {
                    default: {
                      name: "gray",
                      lightness: 35,
                    },
                  },
                  dark: {
                    default: {
                      name: "gray",
                      lightness: 70,
                    },
                  },
                },
              }}
            >
              <FaCopyright />
            </Span>
            <Span
              fore={{
                color: {
                  light: {
                    default: {
                      name: "gray",
                      lightness: 35,
                    },
                  },
                  dark: {
                    default: {
                      name: "gray",
                      lightness: 70,
                    },
                  },
                },
              }}
            >
              {"minominolyly"}
            </Span>
          </Div>
        </Container>
      </Section>
    </Footer>
  );
}
