"use client";
import { Copyright } from "@mui/icons-material";
import { Container, Typography } from "@mui/material";

export default function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <Container className="footer-container">
        <Typography>
          <Copyright fontSize="small" />
          {"minominolyly"}
        </Typography>
      </Container>
    </footer>
  );
}
