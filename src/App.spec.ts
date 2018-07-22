import "jest"

import { lower } from "./App"

describe("Basic test", () => {
  test("returns lowercased string", () => {
    const testString = "TEST"
    expect(lower(testString)).toEqual("test")
  })
})
