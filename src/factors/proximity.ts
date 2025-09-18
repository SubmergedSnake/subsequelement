import { Bearing, SubsequElement } from "../types";

type DomRectSides = keyof Pick<DOMRect, 'top' | 'right' | 'bottom' | 'left'>

const sidesToComparePerBearing = {
	ne: [{ startingHTMLElementSide: 'top', otherHTMLElementSide: 'bottom' }, { startingHTMLElementSide: 'right', otherHTMLElementSide: 'left' }],
	e: [{ startingHTMLElementSide: 'right', otherHTMLElementSide: 'left' }],
	se: [{ startingHTMLElementSide: 'bottom', otherHTMLElementSide: 'top' }, { startingHTMLElementSide: 'right', otherHTMLElementSide: 'left' }],
	s: [{ startingHTMLElementSide: 'bottom', otherHTMLElementSide: 'top' }],
	sw: [{ startingHTMLElementSide: 'bottom', otherHTMLElementSide: 'top' }, { startingHTMLElementSide: 'left', otherHTMLElementSide: 'right' }],
	w: [{ startingHTMLElementSide: 'left', otherHTMLElementSide: 'right' }],
	nw: [{ startingHTMLElementSide: 'top', otherHTMLElementSide: 'bottom' }, { startingHTMLElementSide: 'left', otherHTMLElementSide: 'right' }],
	n: [{ startingHTMLElementSide: 'top', otherHTMLElementSide: 'bottom' }],
} satisfies Record<keyof typeof Bearing, { startingHTMLElementSide: DomRectSides, otherHTMLElementSide: DomRectSides }[]>

export const addProximity = (startingHTMLElement: HTMLElement, otherHTMLElement: HTMLElement, bearing: keyof typeof Bearing): Omit<SubsequElement, 'alignment'> => {

	const [sides1, sides2] = sidesToComparePerBearing[bearing]

	let directionalProximity

	const otherHTMLElementSidePosition = otherHTMLElement.getBoundingClientRect()[sides1.otherHTMLElementSide]
	const startingHTMLElementSidePosition = startingHTMLElement.getBoundingClientRect()[sides1.startingHTMLElementSide]
	directionalProximity = Math.abs(Math.abs(startingHTMLElementSidePosition) - Math.abs(otherHTMLElementSidePosition))

	if (sides2) {
		const otherHTMLElementSidePosition = otherHTMLElement.getBoundingClientRect()[sides2.otherHTMLElementSide]
		const startingHTMLElementSidePosition = startingHTMLElement.getBoundingClientRect()[sides2.startingHTMLElementSide]
		directionalProximity += Math.abs(Math.abs(startingHTMLElementSidePosition) - Math.abs(otherHTMLElementSidePosition))
	}

	console.log(`Proximity from ${startingHTMLElement.textContent} to ${otherHTMLElement.textContent} is ${directionalProximity}`)

	return {
		e: otherHTMLElement, proximity: directionalProximity
	}
}




