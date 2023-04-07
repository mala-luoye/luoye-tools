type Kebab2PascalType = (str: string) => string
/**
 * kebab-case字符串转PascalCase字符串
 * @param str
 * @returns
 */
export const kebab2Pascal: Kebab2PascalType = (str) => {
  const words = str.split("")
  words[0] = words[0].toUpperCase()
  for (let i = 0; i < words.length; i++) {
    if (words[i] === "-") {
      words.splice(i, 1)
      words[i] = words[i].toUpperCase()
    }
  }
  return words.join("")
}
