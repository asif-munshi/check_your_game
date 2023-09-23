/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/discover",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
