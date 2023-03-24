const { resolve } = require("node:path")
const { delFolder } = require("luoye-tools")

delFolder(resolve(__dirname, "./test")).then((res) => {
  console.log(res)
})
