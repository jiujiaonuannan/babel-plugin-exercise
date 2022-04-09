const { transformFileSync } = require("@babel/core");
const parser = require("@babel/parser");
const insertParametersPlugin = require("./plugin/parameters-insert-plugin");
const fs = require("fs");
const path = require("path");

const { code } = transformFileSync(path.join(__dirname, "./source.js"), {
  plugins: [insertParametersPlugin],
  parserOpts: {
    sourceType: "unambiguous",
    plugins: ["jsx"],
  },
});

console.log(code);
