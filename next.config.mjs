/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // domains: ['https://joaoalegria.com/'],
  },
};

export default nextConfig;
