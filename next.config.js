
  /** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
                pathname: '/u/**',
            },
            {
                protocol: 'https',
                hostname: '*.googleusercontent.com',
                // port: '',
                // pathname: '/u/**',
            },
        ],
    },
}

module.exports = nextConfig
// lh3.googleusercontent.com