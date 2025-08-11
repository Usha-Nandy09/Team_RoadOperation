/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/Team_RoadOperation',
  assetPrefix: '/Team_RoadOperation/',
  trailingSlash: true,
}

module.exports = nextConfig 