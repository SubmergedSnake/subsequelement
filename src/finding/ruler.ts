import { HasIdAndElementCoords } from "../types";



export const cornerIsWithinBoundaryLines = (corner: Corner, boundaryBegin: BoundaryLine, boundaryEnd: BoundaryLine) => {
	// check that corner.y is below line1 or equal to, and above line2 or equal to
	// check that corner.x is to the right of line1 or equal to, and to the left of line2 or equal to

	const cornerYOnBoundaryBegin = boundaryBegin.slope * 0 + boundaryBegin.yIntercept
	const cornerYOnBoundaryEnd = boundaryEnd.slope * 0 + boundaryEnd.yIntercept

	console.log(`Y intercepts for corner: ${cornerYOnBoundaryBegin}, ${cornerYOnBoundaryEnd}`)

	const cornerXOnBoundaryBegin = (corner.y - boundaryBegin.yIntercept) / boundaryBegin.slope
	const cornerXOnBoundaryEnd = (corner.y - boundaryEnd.yIntercept) / boundaryEnd.slope

	console.log(`X intercepts for corner: ${cornerXOnBoundaryBegin}, ${cornerXOnBoundaryEnd}`)

	// console.log(`Corner intercepts: ${line1YIntercept}, ${line2YIntercept}`)
	// console.log(`Boundary line intercepts: ${boundaryBegin.yIntercept}, ${boundaryEnd.yIntercept}`)
	// console.log(`The x:es: ${xAtYLine1}, ${xAtYLine2}`)
	//
	// const yIsBelowLine1 = boundaryBeginYIntercept >= boundaryBegin.yIntercept
	// const yIsAboveLine2 = boundaryEndYIntercept <= boundaryBegin.yIntercept
	const yIsBelowLine1 = corner.y >= cornerYOnBoundaryBegin
	const yIsAboveLine2 = corner.y <= cornerYOnBoundaryEnd

	const xisRightOfLine1 = corner.x >= cornerXOnBoundaryBegin
	const xIsLeftOfLine2 = corner.x <= cornerXOnBoundaryEnd

	return (yIsBelowLine1 && yIsAboveLine2) || (xisRightOfLine1 && xIsLeftOfLine2)

}



export const overlapsWithStartingElement = (startingElement: HasIdAndElementCoords, otherElement: HasIdAndElementCoords, degrees: number): boolean => {

	// TEST if any corner of the element is within the grid, or if any line of the element intersects with either of the boundaries

	const { left, right, top, bottom } = startingElement.getBoundingClientRect()

	const topLine = getBoundary({ x: left, y: top }, degrees)
	const bottomLine = getBoundary({ x: left, y: bottom }, degrees)


	// const startLineXAtPointY = (element.y - startLine.b) / startLine.slope
	//
	// const endLineXAtPointY = (element.y - endLine.b) / endLine.slope
	// const endLineYAtPointX = endLine.slope * element.x + endLine.b
	//
	// console.log(`Coordinates at Point: startX: ${startLineXAtPointY}, startY: ${startLineYAtPointX}, endX: ${endLineXAtPointY}, endY: ${endLineYAtPointX}`)
	//
	// return element.x >= startLineXAtPointY && element.x <= endLineXAtPointY && element.y >= startLineYAtPointX && element.y <= endLineYAtPointX
	return false

}

