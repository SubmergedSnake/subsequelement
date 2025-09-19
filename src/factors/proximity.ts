import { Bearing, DomRectSides, SubsequElement } from "../types";


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

export const addProximity = (startingElement: Element, otherElement: Element, bearing: keyof typeof Bearing): Omit<SubsequElement, 'alignment'> => {

	const [sides1, sides2] = sidesToComparePerBearing[bearing]

	let directionalProximity

	const otherElementSidePosition = otherElement.getBoundingClientRect()[sides1.otherElementSide]
	const startingElementSidePosition = startingElement.getBoundingClientRect()[sides1.startingElementSide]
	directionalProximity = Math.abs(Math.abs(startingElementSidePosition) - Math.abs(otherElementSidePosition))

	if (sides2) {
		const otherElementSidePosition = otherElement.getBoundingClientRect()[sides2.otherElementSide]
		const startingElementSidePosition = startingElement.getBoundingClientRect()[sides2.startingElementSide]
		directionalProximity += Math.abs(Math.abs(startingElementSidePosition) - Math.abs(otherElementSidePosition))
	}

	return {
		e: otherElement, proximity: directionalProximity
	}
}




