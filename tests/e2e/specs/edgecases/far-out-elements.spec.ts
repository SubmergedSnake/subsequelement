import { HasToAlign } from '../../../../src/types';
import { assertFarthestElementIds } from '../../utils/assertFarthestElementIds';
import { assertNearestElementIds } from '../../utils/assertNearestElementIds';
import { ElementIdTest } from '../testtypes';

const farthest: ElementIdTest[] = [
	{ desc: 'farthest s(outh)e(ast) of A is C (faroutElementIdTests, farout.html)', startingElementId: 'A', bearing: 'se', hasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: 'B' },
	{ desc: 'absolute farthest s(outh)e(ast) of A is D (faroutElementIdTests, farout.html)', startingElementId: 'A', bearing: 'se', hasToAlign: HasToAlign.NO, expectedId: 'D' },
]

assertFarthestElementIds(farthest, 'farout')


const nearest: ElementIdTest[] = [
	{ desc: 's(outh)e(ast) of A is C (faroutElementIdTestsNearest, farout.html)', startingElementId: 'A', bearing: 'se', hasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: 'B' },
	{ desc: 's(outh)e(ast) of A is B (faroutElementIdTestsNearest, farout.html, HasToAlign.NO)', startingElementId: 'A', bearing: 'se', hasToAlign: HasToAlign.NO, expectedId: 'B' },
	{ desc: 's(outh)e(ast) of A is D (faroutElementIdTestsNearest, farout.html, HasToAlign.YES)', startingElementId: 'A', bearing: 'se', hasToAlign: HasToAlign.YES, expectedId: 'B' },
]

assertNearestElementIds(nearest, 'farout')
