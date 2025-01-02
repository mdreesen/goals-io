import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

   // next.config.js
   const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
  });

  module.exports = withPWA({
    // ... other Next.js configurations
  });
