export const shadeNames = [
  '000',
  '050',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
]

export const luminances = [
  99.99, // 000 white
  97.0, // 050
  92.0, // 100
  85.0, // 200
  74.0, // 300
  62.0, // 400
  48.9, // 500
  39.0, // 600
  27.0, // 700
  15.0, // 800
  5.0, // 900
]

export const regularTextColorConfig = [
  { lum: 20, mix: 0.35 }, // 000 white
  { lum: 20, mix: 0.34 }, // 050
  { lum: 20, mix: 0.33 }, // 100
  { lum: 20, mix: 0.28 }, // 200
  { lum: 20, mix: 0.25 }, // 300
  { lum: 15, mix: 0.25 }, // 400
  { lum: 100, mix: 0.25 }, // 500
  { lum: 99, mix: 0.25 }, // 600
  { lum: 99, mix: 0.25 }, // 700
  { lum: 97, mix: 0.25 }, // 800
  { lum: 96, mix: 0.25 }, // 900 darkest
]

export const vividTextColorConfig = [
  { lum: 45, maxLum: 50, mix: 0.25 }, // 000 white
  { lum: 39, maxLum: 50, mix: 0.25 }, // 050
  { lum: 35, maxLum: 50, mix: 0.25 }, // 100
  { lum: 32, maxLum: 50, mix: 0.25 }, // 200
  { lum: 30, maxLum: 50, mix: 0.25 }, // 300
  { lum: 18.2, minLum: 100, mix: 0.25 }, // 400
  { lum: 100, minLum: 100, mix: 0.25 }, // 500
  { lum: 95, minLum: 100, mix: 0.25 }, // 600
  { lum: 90, minLum: 71, mix: 0.25 }, // 700
  { lum: 85, minLum: 59.1, mix: 0.25 }, // 800
  { lum: 80, minLum: 52.5, mix: 0.25 }, // 900 darkest
]

export const safeTextOnChromaticColors = [
  // 000
  {
    default: true,
    subdued: true,
    vivid: true,
    'vivid-subdued': false,
  },
  // 050
  {
    default: true,
    subdued: true,
    vivid: true,
    'vivid-subdued': false,
  },
  // 100
  {
    default: true,
    subdued: true,
    vivid: true,
    'vivid-subdued': false,
  },
  // 200
  {
    default: true,
    subdued: true,
    vivid: true,
    'vivid-subdued': false,
  },
  // 300
  {
    default: true,
    subdued: false,
    vivid: true,
    'vivid-subdued': false,
  },
  // 400
  {
    default: true,
    subdued: false,
    vivid: true,
    'vivid-subdued': false,
  },
  // 500
  {
    default: true,
    subdued: false,
    vivid: true,
    'vivid-subdued': false,
  },
  // 600
  {
    default: true,
    subdued: false,
    vivid: true,
    'vivid-subdued': false,
  },
  // 700
  {
    default: true,
    subdued: true,
    vivid: true,
    'vivid-subdued': false,
  },
  // 800
  {
    default: true,
    subdued: true,
    vivid: true,
    'vivid-subdued': false,
  },
  // 900
  {
    default: true,
    subdued: true,
    vivid: true,
    'vivid-subdued': false,
  },
]
