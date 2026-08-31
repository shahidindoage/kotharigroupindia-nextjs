import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/agriculture-division',
        destination: '/irrigation-division',
        permanent: true,
      },
      {
        source: '/agriculture-division/:path*',
        destination: '/irrigation-division/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
