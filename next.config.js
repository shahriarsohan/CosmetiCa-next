module.exports = {
  images: {
    domains: ["romex.s3.ap-south-1.amazonaws.com", "cosmetica.com.bd"],
  },
  future: { webpack5: true },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
    ];
  },
};
