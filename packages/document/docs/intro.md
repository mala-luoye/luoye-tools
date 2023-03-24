---
sidebar_position: 1
---

# luoye tools 简介

🏅[luoye tools](https://github.com/mala-luoye/luoye-tools) 是一个面向前端开发者的功能函数库，提供一系列实用的工具函数。

请想象一个场景，当一个产品处于一个快速迭代期，处于这个时期的开发者往往是忙于解决业务问题而没有时间去实现一些底层功能。而 **luoye tools** 诞生的初衷就是为了让开发者们**专注于解决业务问题**而**无需考虑底层实现**。

> ❓ 问：市面上，像 **lodash**，**underscore** 这类优秀且成熟的**开源 javascript 工具库**很多，那么选择**luoye tools**的理由是什么呢？

> 😊 答：**luoye tools** 和 **lodash**，**underscore** 这类 js 工具库定位并不相同。**luoye tools** 是为了解决实际业务开发中繁琐的底层功能实现而生，是一个直面现实问题场景的功能函数库。而后者是为了拓展语言功能而诞生的一类库，两者并不处于同一个抽象层次。

### 安装

```ts
// 选择一个包管理器进行安装
npm install luoye-tools
// or
yarn add luoye-tools
// or
pnpm add luoye-tools
```

### 使用

```ts
// 导入
import { copyText } from "luoye-tools"
// 调用功能函数
if (await copyText("这是一条被复制到剪贴板的文本")) {
  alert("复制成功")
} else {
  alert("复制失败")
}
```

### 未来展望

**luoye tools** 背后是一个年轻且有活力的**[开源团队](https://github.com/mala-luoye)**，我们拥抱且热爱开源，我们追求精益求精。我们坚定信念，且会将长期维护 **luoye tools**。如果你也认为这是一件有意义的事情，也欢迎你加入**[我们的团队](https://github.com/mala-luoye)**。
