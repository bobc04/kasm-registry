/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm OSINT Demo',
    description: 'The official store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://bob04.github.io/kasm-registry',
    contactUrl: 'https://github.com/bob04/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
