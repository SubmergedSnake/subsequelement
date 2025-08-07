
const degreesToRadians = (degrees: number) => {
	return degrees * (Math.PI / 180);
}

export const getLine = (origin: { x: number, y: number }, degrees: number) => {
	const m = degreesToRadians(degrees)
	const yIntercept = origin.y - m * origin.x;
	return { b: yIntercept, slope: m }
}

export const pointIsBetweenLines = (point: { x: number, y: number }, startLine: ReturnType<typeof getLine>, endLine: ReturnType<typeof getLine>) => {

	const startLineY = startLine.slope * point.x + startLine.b;
	const startLineX = (startLineY - startLine.b) / startLine.slope

	const endLineY = endLine.slope * point.x + endLine.b;
	const endLineX = (endLineY - endLine.b) / endLine.slope

	console.log(JSON.stringify(point))
	console.log(`startLineY: ${startLineY}, startLineX: ${startLineX}, endLineY: ${endLineY}, endLineX: ${endLineX}`)

	return (point.x > startLineX && point.x < endLineX)
		&& (point.y > startLineY && point.y < endLineY)
		|| (point.x === startLineX || point.x === endLineX)
		|| (point.y === startLineY || point.y === endLineY)
}

