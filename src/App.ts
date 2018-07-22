export function lower(param: string): string {
  console.log(param)
  return param.toLowerCase()
}

console.warn(lower("Test"))
process.exit(0)
