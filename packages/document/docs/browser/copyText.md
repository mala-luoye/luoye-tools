---
sidebar_position: 1
---

`type CopyTextType = (text: string) => Promise<boolean>`

复制文本到剪贴板。

### 参数

- `text: string`：需要复制的文本内容。

### 返回

返回一个 `Promise`，成功状态的结果值为 `true`，失败状态的结果值为 `false`。

### 示例

```ts
import { copyText } from "luoye-tools"

if (await copyText("这是一条被复制到剪贴板的文本")) {
  alert("复制成功")
} else {
  alert("复制失败")
}
```
