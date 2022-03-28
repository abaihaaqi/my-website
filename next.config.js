const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: []
  }
})

module.exports = withMDX({
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com']
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./lib/sitemap-generator");
    }
    return config
  }
})
