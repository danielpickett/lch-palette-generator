const pixelToRemAliases = [
  { property: '--pixels-1', value: '0.0625rem' },
  { property: '--pixels-2', value: '0.125rem' },
  { property: '--pixels-3', value: '0.1875rem' },
  { property: '--pixels-4', value: '0.25rem' },
  { property: '--pixels-5', value: '0.3125rem' },
  { property: '--pixels-6', value: '0.375rem' },
  { property: '--pixels-7', value: '0.4375rem' },
  { property: '--pixels-8', value: '0.5rem' },
]

const textSizes = [
  { property: '--text-size-xs', value: '0.75rem' },
  { property: '--text-size-s', value: '0.875rem' },
  { property: '--text-size-m', value: '1rem' },
  { property: '--text-size-l', value: '1.125rem' },
  { property: '--text-size-xl', value: '1.25rem' },
  { property: '--text-size-xxl', value: '1.375rem' },
  { property: '--text-size-xxxl', value: '1.625rem' },
]

const borderRadii = [
  { property: '--border-radius-xs', value: '0.125rem' },
  { property: '--border-radius-s', value: '0.25rem' },
  { property: '--border-radius-m', value: '0.5rem' },
  { property: '--border-radius-l', value: '0.75rem' },
  { property: '--border-radius-xl', value: '1rem' },
]

const textWeights = [
  { property: '--text-weight-bold', value: '700' },
  { property: '--text-weight-regular', value: '600' },
  { property: '--text-weight-light', value: '300' },
]

const transitions = [
  {
    property: '--transition-150',
    value: '150ms cubic-bezier(0.25, 0.8, 0.25, 1)',
  },
  {
    property: '--transition-300',
    value: '300ms cubic-bezier(0.25, 0.8, 0.25, 1)',
  },
]

const boxShadows = [
  {
    property: '--box-shadow-100',
    value: `0 0 3px rgba(0, 0, 0, 0.02), 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.08)`,
  },
  {
    property: '--box-shadow-100-dark',
    value: `0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)`,
  },
  {
    property: '--box-shadow-100-focus',
    value: `0 0 0 3px rgba(0, 81, 255, 0.5), 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)`,
  },
  {
    property: '--box-shadow-200',
    value: `0 0 6px rgba(0, 0, 0, 0.02665), 0 3px 6px rgba(0, 0, 0, 0.0533), 0 3px 6px rgba(0, 0, 0, 0.0766)`,
  },
  {
    property: '--box-shadow-200-dark',
    value: `0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)`,
  },
  {
    property: '--box-shadow-200-focus',
    value: `0 0 0 3px rgba(0, 81, 255, 0.5), 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)`,
  },
  {
    property: '--box-shadow-300',
    value: `0 0 20px rgba(0, 0, 0, 0.03165), 0 10px 20px rgba(0, 0, 0, 0.0633), 0 6px 6px rgba(0, 0, 0, 0.0766)`,
  },
  {
    property: '--box-shadow-300-dark',
    value: `0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)`,
  },
  {
    property: '--box-shadow-300-focus',
    value: `0 0 0 3px rgba(0, 81, 255, 0.5), 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)`,
  },
  {
    property: '--box-shadow-400',
    value: `0 0 28px rgba(0, 0, 0, 0.04165), 0 14px 28px rgba(0, 0, 0, 0.0833), 0 10px 10px rgba(0, 0, 0, 0.0733)`,
  },
  {
    property: '--box-shadow-400-dark',
    value: `0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)`,
  },
  {
    property: '--box-shadow-400-focus',
    value: `0 0 0 3px rgba(0, 81, 255, 0.5), 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)`,
  },
  {
    property: '--box-shadow-500',
    value: `0 0 38px rgba(0, 0, 0, 0.05), 0 19px 38px rgba(0, 0, 0, 0.1), 0 15px 12px rgba(0, 0, 0, 0.0733)`,
  },
  {
    property: '--box-shadow-500-dark',
    value: `0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22)`,
  },
  {
    property: '--box-shadow-500-focus',
    value: `0 0 0 3px rgba(0, 81, 255, 0.5), 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22)`,
  },
]

const borderWidth = [
  { property: '--border-width-thin', value: '0.0625rem' },
  { property: '--border-width-default', value: '0.125rem' },
]

const focusRing = [
  { property: '--focus-ring', value: '0 0 0 3px rgba(0, 81, 255, 0.5)' },
  {
    property: '--focus-ring-inset',
    value: '0 0 0 3px inset rgba(0, 81, 255, 0.5)',
  },
]

export const nonComputedTokens = [
  pixelToRemAliases,
  textSizes,
  borderRadii,
  textWeights,
  transitions,
  focusRing,
  boxShadows,
  borderWidth,
]
