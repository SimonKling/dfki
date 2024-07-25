import svgr from "@svgr/webpack";

const webpackConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    config.resolve.alias.canvas = false;
    return config;
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.microlink.io",
      },
      {
        protocol: "https",
        hostname: "ki-campus.org",
      },
      {
        protocol: "https",
        hostname: "www.dfki.de",
      },
    ],
  },
};

export default webpackConfig;
