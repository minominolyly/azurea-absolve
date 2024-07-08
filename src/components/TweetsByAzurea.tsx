"use client";
import { Box } from "@mui/material";

export default function TweetsByAzurea() {
  return (
    <div>
      <a
        className="twitter-timeline"
        data-theme="dark"
        data-height="600"
        href="https://twitter.com/Azurea_sorauta?ref_src=twsrc%5Etfw"
      >
        Tweets by Azurea_sorauta
      </a>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      ></script>
    </div>
  );
}
