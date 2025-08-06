import { X509Certificate } from "crypto";
import { simplegrid3by3 } from "../mockLayouts/simpleGrid3by3"

describe('findOverlappingReloaded', () => {
	test('', () => {

		const origin = { x: 50, y: 100 }
		const anotherPoint = { x: 47, y: 101 }
		const m = Math.PI / 4;
		const originDiagonal = origin.y - m * origin.x;


		// Calculate the y-value of the diagonal line at anotherPoint.x
		const lineY = m * anotherPoint.x + originDiagonal;

		// Determine if anotherPoint is above or below the line
		if (anotherPoint.y < lineY) {
			console.log("anotherPoint is above the line.");
		} else if (anotherPoint.y > lineY) {
			console.log("anotherPoint is below the line.");
		} else {
			console.log("anotherPoint is exactly on the line.");
		}



		const [first] = simplegrid3by3;

	})
})
