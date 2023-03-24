type CopyTextType = (test: string) => Promise<boolean>
/**
 * 复制文本到剪贴板
 * @param text
 * @returns
 */
export const copyText: CopyTextType = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
  } catch (error) {
    return false
  }
  return true
}
