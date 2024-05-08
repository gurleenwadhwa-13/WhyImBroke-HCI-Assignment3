module.exports = {
  server: {
    baseDir: "./",
    middleware: {

      1: require("connect-history-api-fallback")({
        index: "/index.html",
      }),
    },
  },
};