import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Ensure development origins are allowed for HMR and workstation access
  // @ts-ignore - allowedDevOrigins is recognized by Next.js 15 Turbopack at the root level
  allowedDevOrigins: [
    '6000-firebase-studio-1777806900934.cluster-edb2jv34dnhjisxuq5m7l37ccy.cloudworkstations.dev',
    'localhost:9002'
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 's0.wp.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
