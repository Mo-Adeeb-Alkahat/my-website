/** @type {import('next').NextConfig} */
const nextConfig = {images: {
    domains: ['th.bing.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'th.bing.com',
        port: '',
        pathname: 'th/**',
      },
    ],
  },};


export default nextConfig;
