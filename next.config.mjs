/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "oongvcbebqpcxrpntpok.supabase.co",
        port: "",
      },
    ],
  },
};

export default nextConfig;
