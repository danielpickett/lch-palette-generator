export const repositionToTop = (
  tooltipNode: HTMLDivElement,
  tooltipBodyNode: HTMLDivElement,
  tooltipArrowNode: HTMLDivElement,
  paddingInPixels: number,
  arrowSizeInPixels: number,
  trigRect: DOMRect,
  tipRect: DOMRect
) => {
  // position the tooltip
  const newTip = {
    top: Math.round(trigRect.y - tipRect.height),
    left: Math.round(trigRect.x + trigRect.width / 2 - tipRect.width / 2),
  }

  // offset the tooltip body
  if (tooltipBodyNode) {
    const tooFarLeft = newTip.left < paddingInPixels
    const tooFarRight =
      trigRect.left + trigRect.width / 2 + tipRect.width / 2 >
      window.innerWidth - paddingInPixels

    if (tooFarLeft) {
      tooltipBodyNode.style.right = ''
      tooltipBodyNode.style.left =
        Math.abs(newTip.left) + paddingInPixels + 'px'
    } else if (tooFarRight) {
      tooltipBodyNode.style.left = ''
      const amountOfRightsideOverflow = Math.ceil(
        Math.abs(trigRect.left) +
          trigRect.width / 2 +
          tipRect.width / 2 -
          window.innerWidth
      )
      tooltipBodyNode.style.left =
        -amountOfRightsideOverflow - paddingInPixels + 'px'
    } else {
      tooltipBodyNode.style.right = ''
      tooltipBodyNode.style.left = ''
    }

    tooltipNode.style.top = newTip.top + 'px'
    tooltipNode.style.left = newTip.left + 'px'
    tooltipNode.style.paddingBottom = arrowSizeInPixels + 'px'
    tooltipArrowNode.style.bottom = '0'
  }
}
