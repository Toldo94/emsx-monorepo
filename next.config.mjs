/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    experimental: {
        serverActions: {
            allowedOrigins: ["*.app.github.dev", "localhost:3000"],
        },
    },
};

export default nextConfig;

