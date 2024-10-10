/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true
    },
    env: {
        POSTGRES_URL: process.env.POSTGRES_URL
    }
};

export default nextConfig;
