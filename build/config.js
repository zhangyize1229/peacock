/* eslint-disable @typescript-eslint/no-var-requires */
var path = require("path");
var fs = require("fs");
var nodeExternals = require("webpack-node-externals");
var Components = require("../components.json");

var utilsList = fs.readdirSync(path.resolve(__dirname, "../src/utils"));
var mixinsList = fs.readdirSync(path.resolve(__dirname, "../src/mixins"));
var transitionList = fs.readdirSync(
  path.resolve(__dirname, "../src/transitions")
);
var externals = {};

Object.keys(Components).forEach(function (key) {
  externals[`peacock9/packages/${key}`] = `peacock9/lib/${key}`;
});

externals["peacock9/src/locale"] = "peacock9/lib/locale";
debugger
utilsList.forEach(function (file) {
  file = path.basename(file, ".js");
  externals[`peacock9/src/utils/${file}`] = `peacock9/lib/utils/${file}`;
});
mixinsList.forEach(function (file) {
  file = path.basename(file, ".js");
  externals[`peacock9/src/mixins/${file}`] = `peacock9/lib/mixins/${file}`;
});
transitionList.forEach(function (file) {
  file = path.basename(file, ".js");
  externals[
    `peacock9/src/transitions/${file}`
  ] = `peacock9/lib/transitions/${file}`;
});

externals = [
  Object.assign(
    {
      vue: "vue",
    },
    externals
  ),
  nodeExternals(),
];

exports.externals = externals;

exports.alias = {
  main: path.resolve(__dirname, "../src"),
  packages: path.resolve(__dirname, "../packages"),
  examples: path.resolve(__dirname, "../examples"),
  peacock9: path.resolve(__dirname, "../"),
};

exports.vue = {
  root: "Vue",
  commonjs: "vue",
  commonjs2: "vue",
  amd: "vue",
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/;
