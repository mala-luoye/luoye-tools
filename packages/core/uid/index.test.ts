import { uid } from "."

test("uid 100000", () => {
  const uids: string[] = []
  for (let i = 0; i < 100000; i++) {
    uids.push(uid())
  }
  const deUids = [...new Set(uids)]
  expect(uids.length === deUids.length).toBeTruthy()
})
