const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : '';
/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: "export",
};

const withPWA = require('next-pwa')({
  dest: 'public',
  // disable: process.env.NODE_ENV === 'development',
  // register: true,
});

module.exports = withPWA(nextConfig);
