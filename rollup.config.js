const resolve = require("@rollup/plugin-node-resolve")
const typescript = require("@rollup/plugin-typescript")
const commonjs = require("@rollup/plugin-commonjs")
const { terser } = require("rollup-plugin-terser")

module.exports = [
  {
    input: "./packages/core/main.ts",
    output: [
      {
        dir: "./packages/luoye-tools/lib",
        format: "cjs",
        entryFileNames: "luoye-tools.cjs.js",
        sourcemap: true // 是否输出sourcemap
      },
      {
        dir: "./packages/luoye-tools/lib",
        format: "esm",
        entryFileNames: "luoye-tools.esm.js",
        sourcemap: true // 是否输出sourcemap
      },
      {
        dir: "./packages/luoye-tools/lib",
        format: "umd",
        entryFileNames: "luoye-tools.umd.js",
        name: "luoye", // umd模块名称，相当于一个命名空间，会自动挂载到window下面
        sourcemap: true,
        plugins: [terser()]
      }
    ],
    plugins: [resolve(), commonjs(), typescript({ module: "ESNext" })]
  }
]
