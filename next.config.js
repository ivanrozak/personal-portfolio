/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NEXT_DIST_DIR || '.next',
  // First-party proxy for Plausible so analytics isn't blocked by ad blockers
  async rewrites() {
    return [
      { source: '/stats/s.js', destination: 'https://plausible.ivanrozak.com/js/pa-CBl63VHjz5iwVsKRDpNyE.js' },
      { source: '/stats/e', destination: 'https://plausible.ivanrozak.com/api/event' },
    ]
  },
  async redirects() {
    return [
      { source: '/about', destination: '/resume', permanent: true },
      { source: '/cv', destination: '/resume', permanent: true },
    ]
  },
}

module.exports = nextConfig
