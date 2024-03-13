/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: [
      "@react-email/components",
      "@react-email/render",
    ],
  },
};

module.exports = nextConfig;
