---
sidebar_position: 1
---

`type Kebab2PascalType = (str: string) => string`

将 `kebab-case` 格式的字符串转换为 `PascalCase` 格式的字符串。

### 参数

- `str: string`：需要进行转换的字符串。

### 返回

返回一个 `string` 类型值，为 `PascalCase` 格式的字符串。

### 示例

```ts
import { kebab2Pascal } from "luoye-tools"

const resultStr = kebab2Pascal("luoye-tools")
console.log(resultStr) // => 打印 "LuoyeTools"
```
