"use client";
import AppConfig from "@/configurations/app.config";
import RoutePath from "@/constants/RoutePath";
import {
  Article,
  Assignment,
  Directions,
  Festival,
  Menu as MenuIcon,
  PhotoCameraOutlined,
  QuestionMark,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Toolbar,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Div,
  Hamburger,
  Header,
  Nav,
  NavAccordion,
  NavBrand,
  NavBrandCenter,
  NavBrandLeft,
  NavBrandRight,
  NavMenu,
  NavMenuItem,
  Span,
} from "react-minolith";
import AppHeaderProps from "./AppHeaderProps";
import { MinolithLink } from "../MinolithLink";
import { FaMoon, FaSun } from "react-icons/fa6";

export default function AppHeader(props: AppHeaderProps): JSX.Element {
  const [isActive, setIsActive] = useState(false);

  return (
    <Header className="header" isSticky={true} style={{ backgroundColor: "#59533F"}}>
      <Nav role="navigation" aria-label="main navigation">
        <NavAccordion>
          <NavBrand>
            <NavBrandLeft>
              <Hamburger
                isActive={isActive}
                aria-label="menu"
                aria-expanded="false"
                data-target="navbar-menu"
                onClick={() => {
                  setIsActive(!isActive);
                }}
              />
            </NavBrandLeft>
            <NavBrandCenter
              style={{
                maxWidth: "4rem",
              }}
            >
              <MinolithLink
                colorName="violet"
                style={{ fontFamily: "var(--minolith-font-family-heading)" }}
                href={RoutePath.INDEX}
              >
                <Image
                  src={`${AppConfig.BASE_URL}/images/logo.png`}
                  alt="logo"
                  height={256}
                  width={144}
                  style={{ height: "2.5rem", width: "auto", cursor: "pointer" }}
                />
              </MinolithLink>
            </NavBrandCenter>
            <NavBrandRight>
              <Div spacing={{ padding: { right: 0.5 } }}>
                <Div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    cursor: "pointer",
                    verticalAlign: "middle",
                    paddingRight: "3rem",
                  }}
                >
                  <Div
                    back={{
                      color: {
                        default: props.isColorSchemeDark
                          ? { name: "blue", lightness: 20 }
                          : { name: "orange", lightness: 60 },
                      },
                    }}
                    border={{
                      style: "solid",
                      radius: "circle",
                      color: {
                        default: props.isColorSchemeDark
                          ? { name: "blue", lightness: 20 }
                          : { name: "orange", lightness: 60 },
                      },
                    }}
                    style={{
                      display: "inline-flex",
                      width: "2rem",
                      height: "2rem",
                      position: "absolute",
                      alignItems: "center",
                      justifyContent: "center",
                      verticalAlign: "middle",
                      flexShrink: 0,
                      zIndex: 0,
                      marginLeft: props.isColorSchemeDark ? "1rem" : "auto",
                    }}
                    onClick={() => {
                      props.switchColorScheme();
                    }}
                  >
                    {props.isColorSchemeDark ? (
                      <FaMoon color="var(--minolith-color-yellow-90)" />
                    ) : (
                      <FaSun color="var(--minolith-color-yellow-90)" />
                    )}
                  </Div>
                  <Div
                    back={{
                      color: { default: { name: "gray", lightness: 50 } },
                    }}
                    border={{
                      style: "solid",
                      radius: "pill",
                      color: { default: { name: "gray", lightness: 50 } },
                    }}
                    style={{
                      display: "inline-flex",
                      width: "3rem",
                      height: "1rem",
                      position: "absolute",
                      alignItems: "center",
                      justifyContent: "center",
                      verticalAlign: "middle",
                      flexShrink: 0,
                      zIndex: -1,
                    }}
                  ></Div>
                </Div>
              </Div>
            </NavBrandRight>
          </NavBrand>
          <NavMenu isActive={isActive}>
            <NavMenuItem as={Link} href={RoutePath.RULE}>
              <Span>
                <Span>
                  <Article fontSize="small" color="primary" />
                </Span>
                {"ルール"}
              </Span>
            </NavMenuItem>
            <NavMenuItem as={Link} href={RoutePath.GUIDE}>
              <Span>
                <Span>
                  <Directions fontSize="small" color="primary" />
                </Span>
                {"ガイド"}
              </Span>
            </NavMenuItem>
            <NavMenuItem as={Link} href={RoutePath.EVENT}>
              <Span>
                <Span>
                  <Festival fontSize="small" color="primary" />
                </Span>
                {"イベント"}
              </Span>
            </NavMenuItem>
            <NavMenuItem as={Link} href={RoutePath.GALLERY}>
              <Span>
                <Span>
                  <PhotoCameraOutlined fontSize="small" color="primary" />
                </Span>
                {"ギャラリー"}
              </Span>
            </NavMenuItem>
            <NavMenuItem as={Link} href={RoutePath.SURVEY}>
              <Span>
                <Span>
                  <Assignment fontSize="small" color="primary" />
                </Span>
                {"アンケート"}
              </Span>
            </NavMenuItem>
            <NavMenuItem as={Link} href={RoutePath.QUIZ}>
              <Span>
                <Span>
                  <QuestionMark fontSize="small" color="primary" />
                </Span>
                {"クイズ"}
              </Span>
            </NavMenuItem>
          </NavMenu>
        </NavAccordion>
      </Nav>
    </Header>
  );
}
