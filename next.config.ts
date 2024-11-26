import { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        domains: ['robohash.org'],
    },
    async redirects() {
        return [
          // Basic redirect
          {
            source: '/',
            destination: '/login',
            permanent: false,
          },
        ]
      },
}

export default nextConfig;