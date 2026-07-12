import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
};

module.exports = {
  allowedDevOrigins: ['192.168.18.101'],
}

export default nextConfig;