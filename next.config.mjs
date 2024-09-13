/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
          {
            protocol: process.env.NEXT_PUBLIC_PROTOCOL,
            hostname: process.env.NEXT_PUBLIC_BASE_URL_IP,
            port: process.env.NEXT_PUBLIC_BASE_URL_PORT,
            pathname: '/files/**',
          },
          {
            protocol: 'http',
            hostname: '45.92.177.64',
            port: '8103',
            pathname: '/files/**',
          },
        ],
      },
};

export default nextConfig;
