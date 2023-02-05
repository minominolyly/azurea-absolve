/** @type {import('next').NextConfig} */

const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : '';

const nextConfig = {
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  }
};

const withPWA = require('next-pwa')({
  dest: 'public',
  // disable: process.env.NODE_ENV === 'development',
  // register: true,
})

module.exports = withPWA(nextConfig);
