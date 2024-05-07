module.exports = {
  server: {
    baseDir: "./",
    middleware: {
      // Middleware to handle history API fallback
      1: require("connect-history-api-fallback")({
        index: "/index.html",
      }),
    },
  },
};