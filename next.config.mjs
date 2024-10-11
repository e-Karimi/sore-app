/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "unsplash.com", pathname: "/photos/**", port: "" },
      { protocol: "https", hostname: "images.pexels.com", pathname: "/photos/**", port: "" },
      { protocol: "https", hostname: "img.clerk.com", pathname: "/**", port: "" },
      { protocol: "https", hostname: "emelk.biz", pathname: "/mag/wp-content/uploads/2022/**", port: "" },
    ],
  },
};

export default nextConfig;
