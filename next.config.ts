/** @type {import('next').NextConfig} */
const nextConfig = {
    // 1. Ignore TypeScript errors during build
    typescript: {
        ignoreBuildErrors: true,
    },
    // 2. Ignore ESLint errors during build
    eslint: {
        ignoreDuringBuilds: true,
    },
    // 3. Ensure images from Unsplash/etc work
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**', // Allow all external images
            },
        ],
    },
};

export default nextConfig;