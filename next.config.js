/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    // List of trusted remote domains, see https://nextjs.org/docs/basic-features/image-optimization#domains
    domains: ['www.digi-api.com'],
    deviceSizes: [375, 480, 640, 768, 1080, 1200, 1400, 1920, 2048, 3840],
  },
};

module.exports = nextConfig;
