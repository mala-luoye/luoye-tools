---
sidebar_position: 1
---

`type UidType = () => string`

生成一个唯一标识的字符串。

### 参数

无参数。

### 返回

返回一个 `string` 类型的值，代表唯一标识。

### 示例

```ts
import { uid } from "luoye-tools"

console.log(uid()) // => 打印 "A5Os8CK3sg26wXGmY"
```
