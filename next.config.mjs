/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/v1/:path*",
        destination: "https://cp-staging.onrender.com/v1/candystore", // Cambia esta URL por la base de la API
      },
      {
        source: "/v1/:path*",
        destination: "https://cp-staging.onrender.com/v1/premieres", // Cambia esta URL por la base de la API
      },
    ];
  },
};

export default nextConfig;
