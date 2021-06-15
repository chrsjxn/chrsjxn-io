/* eslint-disable no-console */

import css from 'css'

const processRules = (stylesheet) => {
  return stylesheet.rules?.map((rule) => {
    if (rule.type === 'media') {
      return {
        ...rule,
        rules: processRules(rule),
      }
    } else {
      return {
        ...rule,
        selectors: rule.selectors.map((selector) => `:global(${selector})`),
      }
    }
  })
}

export default {
  style: ({ content, filename, attributes }) => {
    if (!attributes.global) {
      return { code: content }
    }

    const ast = css.parse(content, { source: filename })

    const { stylesheet } = ast

    if (!stylesheet) {
      return { code: content }
    }

    if (stylesheet?.parsingErrors?.length > 0) {
      console.log(`Errors parsing ${filename}`)
      ast.parsingErrors.map(console.log)
      return { code: content }
    }

    const processedStyles = {
      ...stylesheet,
      rules: processRules(stylesheet),
    }

    const result = css.stringify(
      { stylesheet: processedStyles },
      { sourcemap: true }
    )

    return { code: result.code, map: result.map, dependencies: [filename] }
  },
}
