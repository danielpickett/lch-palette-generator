function toPascalCase(text: string) {
  return text.replace(/(^\w|-\w)/g, clearAndUpper)
}

function clearAndUpper(text: string) {
  return text.replace(/-/, '').toUpperCase()
}

export const convertTokenOutputToTypes = (cssCombined: string) => {
  const types = cssCombined
    .replace(/ {2}--/gm, '')
    .replace(/:.*$/gm, '')
    .split('\n')
    .map((line) => {
      if (line.match('text-on') !== null) {
        const typeName =
          toPascalCase(
            line
              .replace(/--/gm, '-')
              .replace('lighter', 'Lighter')
              .replace('darker', 'Darker')
              .replace('UNSAFE', 'Unsafe')
          ) + 'Type'

        const onProp =
          line
            .replace(/--/gm, '_')
            .match(/(?<=^text-on-).+?(?=(_|$))/gm)?.[0] ||
          'BIG PROBLEM BIG PROBLEM BIG PROBLEM'

        const unsafe = !!line.match('--UNSAFE')

        const kindMatch = line
          .replace('--UNSAFE', '')
          .replace(/--/gm, '_')
          .match(/(?<=_).+$/gm)

        const kindProp = kindMatch ? `'${kindMatch[0]}'` : 'undefined'

        const result =
          `// ${line}\n` +
          `interface ${typeName} {\n` +
          `  on: '${onProp}'\n` +
          `  kind: ${kindProp}\n` +
          `  UNSAFE: ${unsafe ? 'true' : 'false | undefined'}\n` +
          '}\n'

        return result
      } else {
        return ''
      }
    })
    .join('\n')
    .replace(/^\n{1,}/g, '')
    .replace(/\n$/g, '')

  const typesUnion =
    'type TextTypesUnionType = (\n  | ' +
    types.match(/(?<=interface )\S+/gm)?.join('\n  | ') +
    '\n)'

  const result = typesUnion + '\n\n' + types

  return result.replace(/\n{3,}/gm, '\n\n')
}
