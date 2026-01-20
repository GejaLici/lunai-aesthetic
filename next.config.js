
require('dotenv').config({ path: './.env' });

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'picsum.photos',
        },
        {
            protocol: 'https',
            hostname: 'img.freepik.com',
        },
    ],
  },
};

module.exports = nextConfig;
