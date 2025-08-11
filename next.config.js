/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  basePath: '/Team_RoadOperation',
  assetPrefix: '/Team_RoadOperation/',
  trailingSlash: true,
}

module.exports = nextConfig 