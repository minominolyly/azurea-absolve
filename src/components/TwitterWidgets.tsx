"use client";
import Script from "next/script";

export default function TwitterWidgets() {
  return (
    <Script
      id="twitter-widgets"
      src="https://platform.twitter.com/widgets.js"
      async={true}
      strategy="lazyOnload"
    />
  );
}
