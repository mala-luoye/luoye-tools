import * as fs from "node:fs"

type DelFolderType = (path: string) => Promise<boolean>
/**
 * 删除指定路径的文件夹（未通过测试，问题待解决）
 * @returns
 */
export const delFolder: DelFolderType = (path) => {
  // 递归删除函数
  const recurDel = (path: string) => {
    const files = fs.readFileSync(path)
    files.forEach((file) => {
      const curPath = path + "/" + file
      fs.statSync(curPath).isDirectory()
        ? recurDel(curPath)
        : fs.unlinkSync(curPath)
    })
    fs.rmdirSync(path)
  }
  return new Promise((resolve, reject) => {
    if (fs.existsSync(path)) {
      // 错误捕获
      try {
        recurDel(path)
      } catch (error) {
        console.error((error as Error).message)
        reject(false)
      }
      resolve(true)
    } else {
      reject(false)
    }
  })
}
