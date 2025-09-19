import { HasToAlign } from '../../../../src/types';
import { assertFarthestElementIds } from '../../utils/assertFarthestElementIds';
import { ElementIdTest } from '../testtypes';

const faroutElementIdTests: ElementIdTest[] = [
	{ desc: 'farthest s(outh)e(ast) of A is C (faroutElementIdTests, farout.html)', startingElementId: 'A', bearing: 'se', hasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: 'B' },
	{ desc: 'absolute farthest s(outh)e(ast) of A is D (faroutElementIdTests, farout.html)', startingElementId: 'A', bearing: 'se', hasToAlign: HasToAlign.NO, expectedId: 'D' },
]

assertFarthestElementIds(faroutElementIdTests, 'farout')
