import { repositionToTop } from './repositionToTop'

export const repositionTooltip = (
  triggerNode: HTMLElement | SVGElement | null,
  tooltipNode: HTMLDivElement | null,
  tooltipBodyNode: HTMLDivElement | null,
  tooltipArrowNode: HTMLDivElement | null,
  paddingInPixels: number,
  arrowSizeInRems: number
) => {
  if (triggerNode && tooltipNode && tooltipBodyNode && tooltipArrowNode) {
    const trigRect = triggerNode.getBoundingClientRect()
    const tipRect = tooltipNode.getBoundingClientRect()

    const arrowSizeInPixels =
      arrowSizeInRems *
      parseFloat(getComputedStyle(document.documentElement).fontSize)

    repositionToTop(
      tooltipNode,
      tooltipBodyNode,
      tooltipArrowNode,
      paddingInPixels,
      arrowSizeInPixels,
      trigRect,
      tipRect
    )
  }
}
