import { HasIdAndElementCoords } from "../types";
import { isRangeOverlap } from "range-overlap";

type BoundaryCorners = {
	leftBoundary: { x: 'left' | 'right', y: 'top' | 'bottom' }
	rightBoundary: { x: 'left' | 'right', y: 'top' | 'bottom' }
}
type BoundaryLine = { yIntercept: number, slope: number }
type Corner = { x: number, y: number }
type SupportedAngle = 0 | 45 | 90 | -45

export const degreesToRadians = (degrees: number) => {
	return degrees * (Math.PI / 180);
}


export const getDiagonalBoundary = (origin: Corner, degrees: number): BoundaryLine => {
	const m = degreesToRadians(degrees)
	const yIntercept = origin.y - m * origin.x
	return { yIntercept, slope: m }
}

export const determineBoundaryCornersByAngle = (angle: SupportedAngle): BoundaryCorners => {

	switch (angle) {
		case 45:
			return { leftBoundary: { x: 'left', y: 'bottom' }, rightBoundary: { x: 'right', y: 'top' } }
		case -45:
			return { leftBoundary: { x: 'left', y: 'top' }, rightBoundary: { x: 'right', y: 'bottom' } }
		default: throw new Error('Unsupported angle')
	}
}


const isAligned = (startingElement: HasIdAndElementCoords, angle: SupportedAngle) => {

	return (otherElement: HasIdAndElementCoords) => {
		const { left: oeLeft, right: oeRight, top: oeTop, bottom: oeBottom } = otherElement

		// vertical
		if (angle.valueOf() === 90) {
			return isRangeOverlap(oeLeft + 1, oeRight - 1, startingElement.left + 1, startingElement.right - 1)
		} // horizontal
		else if (angle.valueOf() === 0) {
			return isRangeOverlap(oeTop + 1, oeBottom - 1, startingElement.top + 1, startingElement.bottom - 1)
		}

		//diagonal

		const { leftBoundary: { x: boundaryLeftX, y: boundaryLeftY }, rightBoundary: { x: boundaryRightX, y: boundaryRightY } } = determineBoundaryCornersByAngle(angle)

		let boundaryLeft
		let boundaryRight
		let isAligned


		if (angle.valueOf() === 45) {
			boundaryLeft = getDiagonalBoundary({ x: startingElement[boundaryLeftX] + 1, y: startingElement[boundaryLeftY] + 1 }, angle)
			boundaryRight = getDiagonalBoundary({ x: startingElement[boundaryRightX] - 1, y: startingElement[boundaryRightY] - 1 }, angle)

			const bLeftLeft = boundaryLeft.slope * oeLeft + boundaryLeft.yIntercept
			const bLeftRight = boundaryLeft.slope * oeRight + boundaryLeft.yIntercept

			const bRightLeft = boundaryRight.slope * oeLeft + boundaryRight.yIntercept
			const bRightRight = boundaryRight.slope * oeRight + boundaryRight.yIntercept

			const thereIsYAlignment = isRangeOverlap(oeTop, oeBottom, bRightLeft, bLeftLeft)
			const thereIsYAlignment2 = isRangeOverlap(oeTop, oeBottom, bRightRight, bLeftRight)

			isAligned = thereIsYAlignment || thereIsYAlignment2
		} else {
			boundaryLeft = getDiagonalBoundary({ x: startingElement[boundaryLeftX] - 1, y: startingElement[boundaryLeftY] - 1 }, angle)
			boundaryRight = getDiagonalBoundary({ x: startingElement[boundaryRightX] + 1, y: startingElement[boundaryRightY] + 1 }, angle)
		}
		return isAligned
	}
}

export const findAlignedElements = (startingElement: HasIdAndElementCoords, elements: HasIdAndElementCoords[], angle: SupportedAngle) => {
	return elements.filter(isAligned(startingElement, angle))
}
