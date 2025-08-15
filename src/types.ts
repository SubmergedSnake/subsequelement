export type HasIdAndElementCoords = Omit<DOMRect, 'toJSON'> & {
	id: string,
}

export enum Direction {
	NORTH = 'NORTH',
	NORTHEAST = 'NORTHEAST',
	EAST = 'EAST',
	SOUTHEAST = 'SOUTHEAST',
	SOUTH = 'SOUTH',
	SOUTHWEST = 'SOUTHWEST',
	WEST = 'WEST',
	NORTHWEST = 'NORTHWEST',
}

export enum Strategy {
	STRICT = 'STRICT',
	FLOW = 'FLOW'
}

export type AdjaycentArgs = {
	startingElement: HTMLElement,
	cssSelectorForTargetElements: string,
	direction: keyof typeof Direction
	strategy: keyof typeof Strategy
}


