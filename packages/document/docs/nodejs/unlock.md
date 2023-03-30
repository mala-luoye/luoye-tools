---
sidebar_position: 2
---

`type UnlockType = (lockStr: string) => any`

对使用 `lock` 函数加密过的数据进行解密处理。

### 参数

- `lockStr: string`：`lock` 函数的返回值，待解密的字符串。

### 返回

返回加密前的数据。

### 示例

```ts
const { lock, unlock } = require("luoye-tools")

const data = { username: "张三", password: 123456 }
const lockStr = lock(data)
console.log(unlock(lockStr)) // => 打印 { username: "张三", password: 123456 }
```
