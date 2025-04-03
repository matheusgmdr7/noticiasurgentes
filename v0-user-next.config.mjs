/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: [
      'images.jota.info',
      'www.conveniomedicoempresarial.com.br',
      'www.catedras.com.br',
      'drudu6g9smo13.cloudfront.net'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;

