import { WashType } from "types"

export const sortWashesByLuminance = (washes: WashType[])=> washes.sort((a, b)=> {
  if (a.luminance > b.luminance) return -1
  if (a.luminance < b.luminance) return 1
  return 0
})