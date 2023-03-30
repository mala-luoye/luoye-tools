type UnlockType = (lockStr: string) => any
/**
 * 数据解密
 * @param lockStr
 * @returns
 */
export const unlock: UnlockType = (lockStr) => {
  const codes = Buffer.from(lockStr, "base64")
    .toJSON()
    .data.map((item) => --item)
  try {
    const data = JSON.parse(Buffer.from(codes).toString())
    return data
  } catch (error) {
    return "Meaningless lockStr."
  }
}
