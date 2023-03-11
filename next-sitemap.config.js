/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://minominolyly.github.io/azurea-absolve",
  generateRobotsTxt: true,
  outDir: "./out",
  // robotsTxtOptions: {
  //   policies: [
  //     {
  //       userAgent: '*',
  //       allow: '/',
  //     },
  //   ],
  // },
}
