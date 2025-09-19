import { HasToAlign } from '../../../../src/types';
import { assertFarthestElementIds } from '../../utils/assertFarthestElementIds';
import { assertNearestElementIds } from '../../utils/assertNearestElementIds';
import { ElementIdTest } from '../testtypes';

const undefinedIdTestsNearest: ElementIdTest[] = [
	{ desc: 'n(orth) of A is undefined (undefinedIdTestsNearest, simplegrid)', startingElementId: 'A', bearing: 'n', hasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: undefined },
	{ desc: 'n(orth)e(ast) of A is undefined (undefinedIdTests, simplegridNearest)', startingElementId: 'A', bearing: 'ne', hasToAlign: HasToAlign.NO, expectedId: undefined },
	{ desc: 'e(ast) of C is undefined (undefinedIdTests, simplegridNearest)', startingElementId: 'C', bearing: 'e', hasToAlign: HasToAlign.YES, expectedId: undefined },
	{ desc: 's(ouuth)e(ast) of R is undefined (undefinedIdTests, simplegridNearest)', startingElementId: 'R', bearing: 'se', hasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: undefined },
	{ desc: 's(outh) of T is undefined (undefinedIdTests, simplegridNearest)', startingElementId: 'T', bearing: 's', hasToAlign: HasToAlign.NO, expectedId: undefined },
	{ desc: 's(outh)w(est) of S is undefined (undefinedIdTests, simplegridNearest)', startingElementId: 'S', bearing: 'sw', hasToAlign: HasToAlign.YES, expectedId: undefined },
	{ desc: 'w(est) of A is undefined (undefinedIdTests, simplegridNearest)', startingElementId: 'A', bearing: 'w', hasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: undefined },
	{ desc: 'n(orth)w(est) of A is undefined (undefinedIdTests, simplegridNearest)', startingElementId: 'A', bearing: 'nw', hasToAlign: HasToAlign.NO, expectedId: undefined },
]

assertNearestElementIds(undefinedIdTestsNearest, 'simplegrid')


const undefinedIdTestsFarthest: ElementIdTest[] = [
	{ desc: 'n(orth) of A is undefined (undefinedIdTestsFarthest, simplegrid)', startingElementId: 'A', bearing: 'n', hasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: undefined },
	{ desc: 'n(orth)e(ast) of A is undefined (undefinedIdTestsFarthest, simplegrid)', startingElementId: 'A', bearing: 'ne', hasToAlign: HasToAlign.NO, expectedId: undefined },
	{ desc: 'e(ast) of C is undefined (undefinedIdTestFarthests, simplegrid)', startingElementId: 'C', bearing: 'e', hasToAlign: HasToAlign.YES, expectedId: undefined },
	{ desc: 's(ouuth)e(ast) of R is undefined (undefinedIdTestFarthests, simplegrid)', startingElementId: 'R', bearing: 'se', hasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: undefined },
	{ desc: 's(outh) of T is undefined (undefinedIdTestFarthests, simplegrid)', startingElementId: 'T', bearing: 's', hasToAlign: HasToAlign.NO, expectedId: undefined },
	{ desc: 's(outh)w(est) of S is undefined (undefinedIdTestFarthests, simplegrid)', startingElementId: 'S', bearing: 'sw', hasToAlign: HasToAlign.YES, expectedId: undefined },
	{ desc: 'w(est) of A is undefined (undefinedIdTestFarthests, simplegrid)', startingElementId: 'A', bearing: 'w', hasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: undefined },
	{ desc: 'n(orth)w(est) of A is undefined (undefinedIdTestsFarthest, simplegrid)', startingElementId: 'A', bearing: 'nw', hasToAlign: HasToAlign.NO, expectedId: undefined },
]

assertFarthestElementIds(undefinedIdTestsFarthest, 'simplegrid')
