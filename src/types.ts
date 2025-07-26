export type ImplementsGetBoundingClientRect = {
	id: string,
	getBoundingClientRect: () => Omit<DOMRect, 'x' | 'y'>
}

export enum Direction {
	UP = 'UP',
	DOWN = 'DOWN',
	RIGHT = 'RIGHT',
	LEFT = 'LEFT'
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

