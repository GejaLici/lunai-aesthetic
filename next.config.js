
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
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push('@opentelemetry/instrumentation', 'handlebars', '@opentelemetry/exporter-jaeger');
    }
    return config;
  },
};

module.exports = nextConfig;
