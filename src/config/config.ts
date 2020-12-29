export const colorNames = [
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
  61.0, // 400
  50.0, // 500
  39.0, // 600
  27.0, // 700
  15.0, // 800
  5.0, // 900
]

export const greyscaleTextColorConfig = [
  { lum: 20, mix: 0.75 }, // 000 white
  { lum: 20, mix: 0.75 }, // 050
  { lum: 20, mix: 0.75 }, // 100
  { lum: 20, mix: 0.75 }, // 200
  { lum: 20, mix: 0.75 }, // 300
  { lum: 100, mix: 0.75 }, // 400
  { lum: 100, mix: 0.75 }, // 700
  { lum: 99, mix: 0.75 }, // 600
  { lum: 99, mix: 0.75 }, // 700
  { lum: 97, mix: 0.75 }, // 800
  { lum: 96, mix: 0.75 }, // 900 darkest
]

export const chromaticTextColorConfig = [
  { lum: 20, mix: 0.75 }, // 000 white
  { lum: 20, mix: 0.75 }, // 050
  { lum: 20, mix: 0.75 }, // 100
  { lum: 20, mix: 0.75 }, // 200
  { lum: 20, mix: 0.75 }, // 300
  { lum: 100, mix: 0.75 }, // 400
  { lum: 100, mix: 0.75 }, // 500
  { lum: 99, mix: 0.75 }, // 600
  { lum: 99, mix: 0.75 }, // 700
  { lum: 97, mix: 0.75 }, // 800
  { lum: 96, mix: 0.75 }, // 900 darkest
]

export const vividTextColorConfig = [
  { lum: 45, maxLum: 50, mix: 0.75 }, // 000 white
  { lum: 39, maxLum: 50, mix: 0.75 }, // 050
  { lum: 35, maxLum: 50, mix: 0.75 }, // 100
  { lum: 32, maxLum: 50, mix: 0.75 }, // 200
  { lum: 30, maxLum: 50, mix: 0.75 }, // 300
  { lum: 100, minLum: 90, mix: 0.75 }, // 400
  { lum: 100, minLum: 80, mix: 0.75 }, // 500
  { lum: 95, minLum: 80, mix: 0.75 }, // 600
  { lum: 90, minLum: 72, mix: 0.75 }, // 700
  { lum: 85, minLum: 60, mix: 0.75 }, // 800
  { lum: 80, minLum: 53, mix: 0.75 }, // 900 darkest
]
