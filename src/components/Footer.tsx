"use client";
import { Copyright } from "@mui/icons-material";
import { Container, Stack, Typography } from "@mui/material";

export default function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <Container className="footer-container">
        <Stack alignItems="center" direction="row" gap={0.5}>
          <Copyright fontSize="small" />
          <Typography>{"minominolyly"}</Typography>
        </Stack>
      </Container>
    </footer>
  );
}
