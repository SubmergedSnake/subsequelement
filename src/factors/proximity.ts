import { Bearing, SubsequElement } from "../types";

type DomRectSides = keyof Pick<DOMRect, 'top' | 'right' | 'bottom' | 'left'>

const sidesToComparePerBearing = {
	ne: { startingElementSide: 'top', otherElementSide: 'bottom' },
	e: { startingElementSide: 'right', otherElementSide: 'left' },
	se: { startingElementSide: 'bottom', otherElementSide: 'top' },
	s: { startingElementSide: 'bottom', otherElementSide: 'top' },
	sw: { startingElementSide: 'bottom', otherElementSide: 'top' },
	w: { startingElementSide: 'left', otherElementSide: 'right' },
	nw: { startingElementSide: 'top', otherElementSide: 'bottom' },
	n: { startingElementSide: 'top', otherElementSide: 'bottom' },
} satisfies Record<keyof typeof Bearing, { startingElementSide: DomRectSides, otherElementSide: DomRectSides }>

export const addProximity = (startingHTMLElement: HTMLElement, otherHTMLElement: HTMLElement, bearing: keyof typeof Bearing): Omit<SubsequElement, 'alignment'> => {

	const { otherElementSide, startingElementSide } = sidesToComparePerBearing[bearing]

	const otherElementSidePosition = otherHTMLElement.getBoundingClientRect()[otherElementSide]
	const startingElementSidePosition = startingHTMLElement.getBoundingClientRect()[startingElementSide]

	const directionalProximity = Math.abs(Math.abs(startingElementSidePosition) - Math.abs(otherElementSidePosition))

	console.log(`Proximity from ${startingHTMLElement.textContent} to ${otherHTMLElement.textContent} is ${directionalProximity}`)

	return {
		e: otherHTMLElement, proximity: directionalProximity
	}
}




