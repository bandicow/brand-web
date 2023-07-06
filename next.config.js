/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    images: {
      domains: ['encrypted-tbn0.gstatic.com']
    }
};

module.exports = nextConfig;

// const withSass = require("@zeit/next-sass");

// module.exports = withSass({
//   /* 추가적인 옵션 설정 가능 */
// });
