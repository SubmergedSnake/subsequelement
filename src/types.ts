
export type FindArguments = {
	startingElement: HTMLElement,
	cssSelectorForTargetElements: string,
	direction: 'up' | 'down' | 'left' | 'right',
	strategy: 'strict' | 'flow'
}
