/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  handleImages: ["jpeg", "png", "svg", "webp", "gif"],
  images: {
    domains: [
      "ik.imagekit.io",
      "media.pixxiti.com",
      "firebasestorage.googleapis.com",
    ],
  },
  sassOptions: {
    includePaths: ["./src"],
    prependData: `@import "./styles/variable.scss";@import "./styles/mixin.scss";`,
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};

module.exports = nextConfig;
