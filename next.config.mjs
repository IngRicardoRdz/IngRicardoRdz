/** @type {import('next').NextConfig} */

import { createRequire } from "module";

const require = createRequire(import.meta.url);
const json = require("./package.json");

const nextConfig = {
    output: 'standalone',
    reactStrictMode: true,
    publicRuntimeConfig: {
        version: json.version,
    },
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'music-profile.rayriffy.com',
            },
        ],
    },
};

export default nextConfig;
