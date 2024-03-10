/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    HOST: "http://localhost:3000/api/v1",
    HOST_CLIENT: "http://localhost:5000",
  },
};

export default nextConfig;
