/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, 
    trailingSlash: false,
    images: {
        domains: 
        [
          'i.ibb.co' , 
          "s.wsj.net" , 
          "bykerwin-com.wnwd.co.uk",
          "www.jackimwoods.com" ,
          "images.tech.co",
          "a.espncdn.com"
        ],
      },
}
module.exports = nextConfig 
  