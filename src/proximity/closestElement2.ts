import { Subsequelement } from "../Subsequelement";
import { IsHtmlElementLike } from "../types";

export const closestElement2 =
	(otherElements: Subsequelement[], alignmentThreshold: number = 0)
		: IsHtmlElementLike => {

		return otherElements.filter(e => e.alignment >= alignmentThreshold).reduce((acc, curr) =>
			// curr.proximity < acc.proximity || curr.proximity <= acc.proximity && curr.alignment > acc.alignment ? curr : acc
			curr.proximity < acc.proximity || curr.proximity <= acc.proximity && curr.alignment > acc.alignment ? curr : acc
		).e
	}
