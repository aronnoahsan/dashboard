/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "minimal-kit-react.vercel.app",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
