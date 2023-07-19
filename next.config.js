/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { esmExternals: true },
  images: { domains: ["onfleek.agpro.co.in", "cms.shoponfleek.co.in"] },
};

module.exports = nextConfig;
