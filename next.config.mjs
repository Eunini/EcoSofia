/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Use standalone output
  reactStrictMode: true,
  outputFileTracingRoot: "C:\\Users\\HP\\medicare-ukrain", // Fix workspace root warning
  images: {
    domains: [],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
