/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/eat-clean' : '',
  assetPrefix: isProd ? '/eat-clean' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
