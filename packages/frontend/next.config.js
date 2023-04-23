/** @type {import('next').NextConfig} */
const withLinaria = require('next-with-linaria');

// get backend base URL from env if it exists
const backendBaseURL = process.env.NEXT_PUBLIC_SANITY_STUDIO_BACKEND_BASE_URL || 'http://localhost:3333'

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/backend/',
        destination: `${backendBaseURL}/backend/`,
      },
      {
        source: '/backend/:path*',
        destination: `${backendBaseURL}/backend/:path*`,
      },
    ]
  },
  transpilePackages: ['mydesignguide'],
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(
  withLinaria( nextConfig )
)