/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath: '/eat-clean', // Commented for development
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
