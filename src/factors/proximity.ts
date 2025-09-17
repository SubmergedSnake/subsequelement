import { Bearing, SubsequElement } from "../types";

type DomRectSides = keyof Pick<DOMRect, 'top' | 'right' | 'bottom' | 'left'>

const sidesToComparePerBearing = {
	ne: [{ startingElementSide: 'top', otherElementSide: 'bottom' }, { startingElementSide: 'right', otherElementSide: 'left' }],
	e: [{ startingElementSide: 'right', otherElementSide: 'left' }],
	se: [{ startingElementSide: 'bottom', otherElementSide: 'top' }, { startingElementSide: 'right', otherElementSide: 'left' }],
	s: [{ startingElementSide: 'bottom', otherElementSide: 'top' }],
	sw: [{ startingElementSide: 'bottom', otherElementSide: 'top' }, { startingElementSide: 'left', otherElementSide: 'right' }],
	w: [{ startingElementSide: 'left', otherElementSide: 'right' }],
	nw: [{ startingElementSide: 'top', otherElementSide: 'bottom' }, { startingElementSide: 'left', otherElementSide: 'right' }],
	n: [{ startingElementSide: 'top', otherElementSide: 'bottom' }],
} satisfies Record<keyof typeof Bearing, { startingElementSide: DomRectSides, otherElementSide: DomRectSides }[]>

export const addProximity = (startingHTMLElement: HTMLElement, otherHTMLElement: HTMLElement, bearing: keyof typeof Bearing): Omit<SubsequElement, 'alignment'> => {

	const [sides1, sides2] = sidesToComparePerBearing[bearing]

	let directionalProximity

	const otherElementSidePosition = otherHTMLElement.getBoundingClientRect()[sides1.otherElementSide]
	const startingElementSidePosition = startingHTMLElement.getBoundingClientRect()[sides1.startingElementSide]
	directionalProximity = Math.abs(Math.abs(startingElementSidePosition) - Math.abs(otherElementSidePosition))

	if (sides2) {
		const otherElementSidePosition = otherHTMLElement.getBoundingClientRect()[sides2.otherElementSide]
		const startingElementSidePosition = startingHTMLElement.getBoundingClientRect()[sides2.startingElementSide]
		directionalProximity += Math.abs(Math.abs(startingElementSidePosition) - Math.abs(otherElementSidePosition))
	}

	console.log(`Proximity from ${startingHTMLElement.textContent} to ${otherHTMLElement.textContent} is ${directionalProximity}`)

	return {
		e: otherHTMLElement, proximity: directionalProximity
	}
}




