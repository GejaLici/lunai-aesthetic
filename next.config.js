
require('dotenv').config({ path: './.env' });

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
};

module.exports = nextConfig;
