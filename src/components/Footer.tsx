import { Copyright } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export default function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <Box sx={{
        bgcolor: "gray",
        padding: "1rem 0"
      }}>
        <Typography>
          <Copyright fontSize="small" />{"minominolyly"}
        </Typography>
      </Box>
    </footer>
  );
}
