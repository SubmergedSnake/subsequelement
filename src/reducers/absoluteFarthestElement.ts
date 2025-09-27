import { SubsequElement } from "../types"

export const absoluteFarthestElement = (otherElements: SubsequElement[]): Element | undefined => {

	if (otherElements.length === 0) return undefined

	let absoluteFarthestElement = otherElements.reduce((acc, curr) =>
		curr.proximity > acc.proximity ? curr : acc
	).e || undefined

	return absoluteFarthestElement
}
