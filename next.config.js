/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.a.transfermarkt.technology",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "tmssl.akamaized.net",
        pathname: "**",
      },
    ],
  },

  swcPlugins: [["@swc-jotai/react-refresh", {}]],
};

module.exports = nextConfig;
