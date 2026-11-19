/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NEXT_DIST_DIR || '.next',
  async redirects() {
    return [
      { source: '/about', destination: '/resume', permanent: true },
      { source: '/cv', destination: '/resume', permanent: true },
    ]
  },
}

module.exports = nextConfig
