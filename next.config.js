/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: 'lh3.googleusercontent.com',
        },
        {
          protocol: "https",
          hostname: 'res.cloudinary.com',
        },
        {
          protocol: 'https',
          hostname: 'task.com'
        }
      ],
    },
    experimental: {
      serverComponentsExternalPackages: ['cloudinary', 'graphql-request']
    },
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true
    }
  }

module.exports = nextConfig
