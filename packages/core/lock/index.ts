type LockType = (data: any) => string
/**
 * 数据加密
 * @param data
 * @returns
 */
export const lock: LockType = (data) => {
  const codes = Buffer.from(JSON.stringify(data))
    .toJSON()
    .data.map((item) => ++item)
  return Buffer.from(codes).toString("base64")
}
