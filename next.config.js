module.exports = {
  images: {
    loader: "imgix",
    path: "https://dukza.github.io/example-story-book",
  },
  reactStrictMode: true,
  webpack: (config, {
    buildId,
    dev,
    isServer,
    defaultLoaders,
    webpack
 }) => {
    // Important: return the modified config
    return config
 },
}
