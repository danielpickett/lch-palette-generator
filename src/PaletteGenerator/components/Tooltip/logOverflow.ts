export const logOverflow = (
  top: boolean,
  right: boolean,
  bottom: boolean,
  left: boolean,
) =>
  console.log(`
${top || left ? '●' : '○'} ${top ? '●' : '○'} ${top || right ? '●' : '○'}
${left ? '●' : '○'}   ${right ? '●' : '○'}
${bottom || left ? '●' : '○'} ${bottom ? '●' : '○'} ${
    bottom || right ? '●' : '○'
  }
`)
