/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove 'standalone' output for better Vercel compatibility
  reactStrictMode: true,
  // Remove the absolute path outputFileTracingRoot for Vercel deployment
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
