/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['localhost', 'cdn.sanity.io'], // resim alınmasına izin verdiğimiz domain adresleri
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
    formats: ['image/webp'], // öncelik olark bir format belirliyoruz
  },
};

export default nextConfig;
