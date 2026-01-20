
require('dotenv').config({ path: './.env' });

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push('@opentelemetry/instrumentation', 'handlebars', '@opentelemetry/exporter-jaeger');
    }
    return config;
  },
};

module.exports = nextConfig;
