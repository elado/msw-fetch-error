module.exports = {
  setupFiles: [
    process.env.TEST === "node"
      ? "./jest.setup.node.js"
      : process.env.TEST === "whatwg"
      ? "./jest.setup.whatwg.js"
      : undefined,
  ].filter(Boolean),
  testEnvironment: "jsdom",

  transformIgnorePatterns: [
    "node_modules/(?!node-fetch|data-uri-to-buffer|fetch-blob|formdata-polyfill)",
  ],
};
