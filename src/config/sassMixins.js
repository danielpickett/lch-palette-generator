export const sassMixins = `
@mixin focus-ring-inset {
  &:focus {
    box-shadow: $focus-ring-inset;
    outline: none;
  }
  &:focus:not(:focus-visible) {
    box-shadow: none;
    outline: none;
  }
  &:focus-visible {
    box-shadow: $focus-ring-inset;
  }
}

@mixin focus-ring {
  &:focus {
    box-shadow: $focus-ring;
    outline: none;
  }
  &:focus:not(:focus-visible) {
    box-shadow: none;
    outline: none;
  }
  &:focus-visible {
    box-shadow: $focus-ring;
  }
}
`
