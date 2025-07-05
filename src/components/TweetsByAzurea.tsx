"use client";

import { useEffect, useRef } from "react";

export default function TweetsByAzurea() {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    window.twttr?.widgets.load(ref.current);
  }, []);

  return (
    <div>
      <a
        ref={ref}
        className="twitter-timeline"
        data-theme="dark"
        data-height="600"
        href="https://twitter.com/Azurea_sorauta?ref_src=twsrc%5Etfw"
      >
        Tweets by Azurea_sorauta
      </a>
    </div>
  );
}
