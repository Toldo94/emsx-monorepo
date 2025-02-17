/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    experimental: {
        serverActions: {
            allowedOrigins: ["*.app.github.dev", "localhost:3000"],
        },
        runtime: "nodejs",
    },
    images: {
        remotePatterns: [
            {
                hostname: "images.unsplash.com",
            }
        ]
    }
};

export default nextConfig;

