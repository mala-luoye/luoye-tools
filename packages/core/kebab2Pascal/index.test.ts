import { kebab2Pascal } from "."

test("kebab2Pascal", () => {
  expect(kebab2Pascal("this-is-a-test")).toBe("ThisIsATest")
})
