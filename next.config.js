const withSvgr = require('next-plugin-svgr');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    return config;
  },
};

module.exports = withSvgr(nextConfig);
