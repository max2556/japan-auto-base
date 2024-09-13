/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_PROTOCOL,
        hostname: process.env.NEXT_PUBLIC_BASE_URL_IP,
        port: process.env.NEXT_PUBLIC_BASE_URL_PORT,
        pathname: "/files/**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  rewrites: async () => [
    {
      source: "/api/:path*",
      destination: process.env.NEXT_PUBLIC_BASE_URL + "/:path*",
    },
  ],
};

export default nextConfig;
