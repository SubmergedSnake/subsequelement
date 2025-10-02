import { getTargetElements } from "../utilities";
import { Point } from "../types";

const isInsideElement = (p: Point, e: Element): boolean => {
	const rect = e.getBoundingClientRect();
	return (
		p.x >= rect.left &&
		p.x <= rect.right &&
		p.y >= rect.top &&
		p.y <= rect.bottom
	);
}

const getElementCenterPoint = (e: Element): { x: number, y: number } => {
	const rect = e.getBoundingClientRect()
	return {
		x: rect.left + rect.width / 2, y: rect.top + rect.height / 2
	}
}

const minDistanceToElementSidesCompound = (origin: Point, e: Element): number => {
	const rect = e.getBoundingClientRect()
	const { x, y } = origin
	const minXSideDistance = Math.min(Math.abs(x - rect.left), Math.abs(x - rect.right))
	const minYSideDistance = Math.min(Math.abs(y - rect.top), Math.abs(y - rect.bottom))
	return minXSideDistance + minYSideDistance
}

const distanceBetweenTwoPoints = (a: Point, b: Point): number => {
	const xDiff = Math.abs(a.x - b.x)
	const yDiff = Math.abs(a.y - b.y)
	return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}

export const nearestElementToPoint = (point: Point, selectors: string[]): Element | undefined => {

	const elements = getTargetElements(selectors)
	let nearestElement = undefined
	let smallestDistance = Number.MAX_VALUE

	for (const element of elements) {

		if (isInsideElement(point, element)) {
			nearestElement = element
			break;
		}

		const smallestDistanceToElementSides = minDistanceToElementSidesCompound(point, element)
		const distanceToElementCenter = distanceBetweenTwoPoints(point, getElementCenterPoint(element))

		const minDistance = Math.min(smallestDistanceToElementSides, distanceToElementCenter)
		if (minDistance < smallestDistance) {
			nearestElement = element
			smallestDistance = minDistance
		}
	}

	return nearestElement
}
