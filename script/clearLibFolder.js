const fs = require("node:fs")
const path = require("node:path")
const LIB_PATH = path.resolve(__dirname, "../packages/luoye-tools/lib")

const deleteFolder = (dir_path) => {
  if (fs.existsSync(dir_path)) {
    const files = fs.readdirSync(dir_path)
    files.forEach((file) => {
      const curPath = path.resolve(dir_path, file)
      fs.statSync(curPath).isDirectory()
        ? deleteFolder(curPath)
        : fs.unlinkSync(curPath)
    })
    fs.rmdirSync(dir_path)
  }
}

deleteFolder(LIB_PATH)
