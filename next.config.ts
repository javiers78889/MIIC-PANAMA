import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb', // tamaño máximo de la request
    },
  },
  reactStrictMode: true,

  images: {
    domains: ['69.62.68.105'], // aquí pones la IP o dominio de tu CDN
  },


};

export default nextConfig;
