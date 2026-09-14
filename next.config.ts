import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === "true";
const requestedBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? "";
// wosaide.com/bar is the single production website. Static export defaults to
// /bar so production builds cannot silently fall back to the retired GitHub
// Pages repository path. Local dynamic development may still run at /.
const deploymentBasePath = requestedBasePath || (isStaticExport ? "/bar" : "");

const nextConfig: NextConfig = {
  output: isStaticExport ? "export" : undefined,
  basePath: deploymentBasePath,
  assetPrefix: deploymentBasePath,
  trailingSlash: isStaticExport,
  images: {
    unoptimized: isStaticExport,
  },
};

export default nextConfig;
