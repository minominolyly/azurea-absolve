import fs from "node:fs";
import { Feed } from "feed";

function generateFeed() {
  const baseUrl = "https://minominolyly.github.io/azurea-absolve";
  const date = new Date();

  const feed = new Feed({
    title: "Absolve@AZUREA-空の唄-",
    description: "「AZUREA-空の唄-」のギルド「Absolve」のページです。",
    id: baseUrl,
    link: baseUrl,
    language: "ja",
    copyright: `All rights reserved ${date.getFullYear()}, minominolyly`,
    image: `${baseUrl}/favicon.ico`,
    updated: date,
    feedLinks: {
      rss2: `${baseUrl}/rss/feed.xml`,
      json: `${baseUrl}/rss/feed.json`,
      atom: `${baseUrl}/rss/atom.xml`,
    },
  });


  fs.mkdirSync("./out/rss", { recursive: true });
  fs.writeFileSync("./out/rss/feed.xml", feed.rss2());
  fs.writeFileSync("./out/rss/atom.xml", feed.atom1());
  fs.writeFileSync("./out/rss/feed.json", feed.json1());
}

generateFeed();
