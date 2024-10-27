/** @type {import('next').NextConfig} */

import { createRequire } from "module";

const require = createRequire(import.meta.url);
const json = require("./package.json");

const nextConfig = {
    reactStrictMode: true,
    publicRuntimeConfig: {
        version: json.version,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'music-profile.rayriffy.com',
            },
        ],
    },
};

export default nextConfig;
