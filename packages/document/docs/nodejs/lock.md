---
sidebar_position: 1
---

`type LockType = (data: any) => string`

对数据进行加密处理，和 `unlock` 函数搭配可实现对数据的加解密。

### 参数

- `data: any`：需要进行加密的数据。

### 返回

返回一个 `string` 类型值，为数据加密后的产物。

### 示例

```ts
const { lock } = require("luoye-tools")

const data = { username: "张三", password: 123456 }
const lockStr = lock(data)
console.log(lockStr) // => 打印 "fCN2dGZzb2JuZiM7I+a9oeW5iiMtI3FidHR4cHNlIzsyMzQ1Njd+"
```
