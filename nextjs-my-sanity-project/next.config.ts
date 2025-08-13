// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
    
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    serverActions: true, // если используешь server actions
  },
  output: 'standalone', // Важно для Netlify и других хостингов
};

export default nextConfig;
