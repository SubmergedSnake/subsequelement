import { degreesToRadians } from "../utilities";

export const getLine = (origin: { x: number, y: number }, degrees: number) => {
	const m = degreesToRadians(degrees)
	const yIntercept = origin.y - m * origin.x;
	return { b: yIntercept, slope: m }
}

export const pointIsBetweenLines = (point: { x: number, y: number }, line1: ReturnType<typeof getLine>) => {

	// Calculate the y-value of the diagonal line at anotherPoint.x
	const lineY = line1.slope * point.x + line1.b;

	// Determine if anotherPoint is above or below the line
	if (point.y < lineY) {
		console.log("anotherPoint is above the line.");
	} else if (point.y > lineY) {
		console.log("anotherPoint is below the line.");
	} else {
		console.log("anotherPoint is exactly on the line.");
	}
}

