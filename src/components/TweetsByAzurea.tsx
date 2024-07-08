"use client";

import Script from "next/script";
import TwitterWidgets from "./TwitterWidgets";

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
      <TwitterWidgets />
    </div>
  );
}
