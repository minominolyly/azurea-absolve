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

export default function Header(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="header">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ position: "fixed" }} component="nav" color="secondary">
          <Toolbar>
            <Box component={Link} href={RoutePath.INDEX}>
              <Image
                src={`${AppConfig.BASE_URL}/images/logo.png`}
                alt="logo"
                height={256}
                width={144}
                style={{ height: "2.5rem", width: "auto", cursor: "pointer" }}
              />
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton
              edge="end"
              style={{
                color: "var(--color-gray-70)",
              }}
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => {
                setOpen(!open);
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
          {open ? (
            <MenuList>
              <MenuItem component={Link} href={RoutePath.RULE}>
                <ListItemIcon>
                  <Article fontSize="small" color="primary" />
                </ListItemIcon>
                <ListItemText>{"ルール"}</ListItemText>
              </MenuItem>
              <MenuItem component={Link} href={RoutePath.GUIDE}>
                <ListItemIcon>
                  <Directions fontSize="small" color="primary" />
                </ListItemIcon>
                <ListItemText>{"ガイド"}</ListItemText>
              </MenuItem>
              <MenuItem component={Link} href={RoutePath.EVENT}>
                <ListItemIcon>
                  <Festival fontSize="small" color="primary" />
                </ListItemIcon>
                <ListItemText>{"イベント"}</ListItemText>
              </MenuItem>
              <MenuItem component={Link} href={RoutePath.GALLERY}>
                <ListItemIcon>
                  <PhotoCameraOutlined fontSize="small" color="primary" />
                </ListItemIcon>
                <ListItemText>{"ギャラリー"}</ListItemText>
              </MenuItem>
              <MenuItem component={Link} href={RoutePath.SURVEY}>
                <ListItemIcon>
                  <Assignment fontSize="small" color="primary" />
                </ListItemIcon>
                <ListItemText>{"アンケート"}</ListItemText>
              </MenuItem>
              <MenuItem component={Link} href={RoutePath.QUIZ}>
                <ListItemIcon>
                  <QuestionMark fontSize="small" color="primary" />
                </ListItemIcon>
                <ListItemText>{"クイズ"}</ListItemText>
              </MenuItem>
            </MenuList>
          ) : (
            <></>
          )}
        </AppBar>
      </Box>
      <Toolbar />
    </header>
  );
}
