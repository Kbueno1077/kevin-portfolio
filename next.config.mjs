/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["api.microlink.io"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "assets.aceternity.com",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                pathname: "**",
            },
        ],
    },
};

export default nextConfig;
