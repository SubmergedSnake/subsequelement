export type HasIdAndElementCoords = Omit<DOMRect, 'toJSON'> & {
	id: string,
}

export type ElementWithAlignment = {
	e: HasIdAndElementCoords,
	alignment: number
}

export type SupportedAngle = 0 | 45 | 90 | -45

export const Bearing = {
	n: 90,
	ne: -45,
	e: 0,
	se: 45,
	s: 90,
	sw: -45,
	w: 0,
	nw: 45
}


export enum Strategy {
	STRICT = 'STRICT',
	FLOW = 'FLOW'
}

export type AdjaycentArgs = {
	startingElement: HTMLElement,
	cssSelectorForTargetElements: string,
	bearing: keyof typeof Bearing
	strategy: keyof typeof Strategy
}


