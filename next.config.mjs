/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    remotePatterns: [{ hostname: 'cdn-icons-png.flaticon.com' }]
  }
};

export default nextConfig;
