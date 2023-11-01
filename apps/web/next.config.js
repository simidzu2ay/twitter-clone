module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui", "tailwindconfig"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/*.png",
      },
    ],
  },
};
