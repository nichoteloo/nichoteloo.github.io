/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "https://nichoteloo.github.io/",
  },
  basePath: "",
  assetPrefix: "",
};

module.exports = nextConfig
