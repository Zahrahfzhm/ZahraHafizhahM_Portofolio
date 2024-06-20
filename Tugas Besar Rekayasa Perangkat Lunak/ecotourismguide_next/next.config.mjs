/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
          {
            protocol: 'https',
            hostname: 'pub-61d3359e301643b69bf13e131f4a6786.r2.dev'
          },
          {
              protocol: 'https',
              hostname: 'cdn.builder.io',
              pathname: '/api/v1/image/assets/**',
          },
          {
              protocol: 'https',
              hostname: 'images.unsplash.com',
          },
      ],
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
      async redirects() {
        return [
          {
            source: '/',
            destination: '/Wisatawan',
            permanent: true, // Atur ke true untuk pengalihan permanen (301)
          },
        ];
      },
};

export default nextConfig;
