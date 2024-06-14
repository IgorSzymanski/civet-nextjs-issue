import civetWebpackPlugin from "@danielx/civet/webpack";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "civet"],
  webpack(config) {
    config.plugins.unshift(civetWebpackPlugin({}));

    return config;
  },
};

export default nextConfig;
