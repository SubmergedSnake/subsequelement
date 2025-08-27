export type IsHtmlElementLike = {
	id: string,
	getBoundingClientRect: () => Omit<ReturnType<HTMLElement['getBoundingClientRect']>, 'toJSON'> & {
		toJSON?: () => string
	}
}

export type BoundaryCorners = {
	bottomBoundary: { x: 'left' | 'right', y: 'top' | 'bottom' }
	topBoundary: { x: 'left' | 'right', y: 'top' | 'bottom' }
}

export type Corner = { x: number, y: number }

export type ElementWithAlignment = {
	e: IsHtmlElementLike,
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
} satisfies { [key: string]: SupportedAngle }


export enum Strategy {
	STRICT = 'STRICT',
	FLOW = 'FLOW'
}

export type Options = {
	startingElement: HTMLElement,
	cssSelectorForTargetElements: string,
	bearing: keyof typeof Bearing
	strategy: keyof typeof Strategy
}


