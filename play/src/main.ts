import { copyText } from "luoye-tools"

document.querySelector(".copy-btn")?.addEventListener("click", async () => {
  ;(await copyText("测试一下"))
    ? console.log("复制成功")
    : console.log("复制失败")
})
