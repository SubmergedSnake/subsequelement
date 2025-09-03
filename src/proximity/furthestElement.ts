import { Subsequelement } from "../Subsequelement"
import { IsHtmlElementLike } from "../types"

export const furthestElement = (otherElements: Subsequelement[], alignmentThreshold: number = 0.75): IsHtmlElementLike => {
	console.log(`alignment threshold a ${alignmentThreshold}`);
	const foo = otherElements.filter(e => e.alignment > alignmentThreshold)
	foo.forEach(console.log)


	return otherElements.filter(e => e.alignment > alignmentThreshold).reduce((acc, curr) => curr.proximity > acc.proximity || curr.proximity >= acc.proximity && curr.alignment > acc.alignment ? curr : acc).e
}
