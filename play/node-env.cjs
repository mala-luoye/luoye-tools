const { lock, unlock } = require("luoye-tools")

const data = { username: "张三", password: 123456 }
const lockStr = lock(data)
console.log(unlock(lockStr)) // => 打印 { username: "张三", password: 123456 }
