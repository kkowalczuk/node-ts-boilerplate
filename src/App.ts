function foo(param: string): string {
  console.log(param)
  return param.toLowerCase()
}

console.warn(foo("Test"))
