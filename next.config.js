
require('dotenv').config({ path: './.env' });

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'picsum.photos',
        },
    ],
  },
};

module.exports = nextConfig;
