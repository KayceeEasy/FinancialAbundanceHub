import type { NextConfig } from "next";
const nextConfig: NextConfig = {

reactCompiler: true,
};
module.exports = {
//allowedDevOrigins: ['192.168.18.*'],
allowedDevOrigins: ['10.198.134.*'],
}

export default nextConfig;
import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
