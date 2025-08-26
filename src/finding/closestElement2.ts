import { getElementDistanceDirectional, getElementDistanceHypot } from "./elementDistance";
import { ElementWithAlignment, HasIdAndElementCoords } from "../types";

import { Bearing } from "../types";
import { getegid } from "process";

type ClosestAlgorithm = 'directional' | 'hypot'


export const closestElement2 =
	(startingElement: HasIdAndElementCoords, otherElements: ElementWithAlignment[], bearing: keyof typeof Bearing, algo: ClosestAlgorithm = 'directional')
		: HasIdAndElementCoords => {

		const algorithm = algo === "directional" ? getElementDistanceDirectional : getElementDistanceHypot

		const elementsWithDistances =
			otherElements.map(element => ({ ...algorithm(startingElement, element, bearing) }))

		return elementsWithDistances.reduce((acc, curr) => curr.distance < acc.distance ? curr : acc).element.e

	}


