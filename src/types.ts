export type Point = {
	x: number,
	y: number
}

export type BoundaryCorners = {
	bottomBoundary: { x: 'left' | 'right', y: 'top' | 'bottom' }
	topBoundary: { x: 'left' | 'right', y: 'top' | 'bottom' }
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


export type SubsequElement = {
	e: Element,
	alignment: number,
	proximity: number,
	overlap?: number
}


export type DomRectSides = keyof Pick<DOMRect, 'top' | 'right' | 'bottom' | 'left'>

export enum HasToAlign {
	YES = 'yes',
	NO = 'no',
	ASMUCHASPOSSIBLE = 'asmuchaspossible'
}

export type HasOverlap = Required<SubsequElement>


