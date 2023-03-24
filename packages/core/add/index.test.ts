import { add } from "."

test("add(1,2)", () => {
  expect(add(1, 2)).toBe(3)
})
test("add(3,4)", () => {
  expect(add(3, 4)).toBe(7)
})
