/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /*images: {
    domains: [process.env.baseURL],
  },*/
  compiler: {
    styledComponents: true,
  },
  rewrites: () => [{ source: "/api/:path*", destination: `${process.env.baseURL}/:path*` }],
};

module.exports = nextConfig;
