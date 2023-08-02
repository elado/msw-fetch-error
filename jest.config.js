module.exports = {
  setupFiles: [
    process.env.TEST === "node"
      ? "./jest.setup.node.js"
      : "./jest.setup.whatwg.js",
  ],
  testEnvironment: "jsdom",

  transformIgnorePatterns: [
    "node_modules/(?!node-fetch|data-uri-to-buffer|fetch-blob|formdata-polyfill)",
  ],
};
