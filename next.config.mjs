/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // emit a static site to ./out
  images: { unoptimized: true }, // next/image works without a server
  trailingSlash: true, // /pricing/ → folder index, friendlier for static hosts
  eslint: { ignoreDuringBuilds: true }, // lint runs via `npm run lint`, not the build
};

export default nextConfig;
