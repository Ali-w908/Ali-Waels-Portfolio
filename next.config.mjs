/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['192.168.56.1', 'localhost'],
  devIndicators: {
    buildActivity: false,
  },
};

export default nextConfig;
