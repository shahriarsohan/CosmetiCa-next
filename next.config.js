const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    swSrc: "service-worker.js",
  },
  images: {
    domains: ["romex.s3.ap-south-1.amazonaws.com", "cosmetica.com.bd"],
  },
  future: { webpack5: true },
});
