import { AlignmentOption, SubsequElement } from "../types"

export const farthestElement = (otherElements: SubsequElement[], alignmentOption: AlignmentOption): Element | undefined => {

	if (otherElements.length === 0) return undefined

	let farthestElement: Element | undefined

	console.log(`alignmentOption: ${alignmentOption}`);
	otherElements.forEach(i => { if (['M', 'AB'].includes(i.e.id || "foobar")) { console.log(`element: ${i.e.textContent}, alignment: ${i.alignment}, proximity: ${i.proximity}, overlap: ${i.overlap}`) } });



	switch (alignmentOption) {
		case 'indifferent':
			farthestElement = otherElements.reduce((acc, curr) =>
				curr.proximity > acc.proximity ? curr : acc
			).e || undefined
			break;

		case 'preferred':
			let alignmentThresholds = [0.5, 0, -0.5, -1, -1.5, -2, -2.5, -3, -4, -5]
			for (const threshold of alignmentThresholds) {
				const elementsWithinThreshold = otherElements.filter(e => e.alignment >= threshold)
				if (elementsWithinThreshold.length > 0) {
					farthestElement = elementsWithinThreshold.reduce((acc, curr) =>
						curr.proximity > acc.proximity ? curr : acc
					).e
				}
			}
			break;

		case 'required':
			farthestElement = otherElements.filter(e => e.alignment > 0).reduce((acc, curr) =>
				curr.proximity > acc.proximity ? curr : acc
			).e || undefined
			break;

		default:
			farthestElement = undefined
			break;
	}
	return farthestElement
}
