import RoutePath from "@/constants/RoutePath";
import { Menu as MenuIcon, QuestionMark } from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function Header(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="header">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ position: "fixed" }} component="nav" color="secondary">
          <Toolbar>
            <Typography
              component={Link}
              href={RoutePath.INDEX}
              color="inherit"
              noWrap={true}
              sx={{
                mr: 2,
                display: "flex",
                letterSpacing: ".25rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {"Absolve@海神の眼.AZUREA-空の唄-"}
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton
              edge="end"
              color="inherit"
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
