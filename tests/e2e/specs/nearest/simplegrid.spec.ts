import { HasToAlign, Bearing } from '../../../../src/types';
import { assertNearestElementIds } from '../../utils/assertNearestElementIds';

const simpleGridTests: { desc: string, startingElementId: string, bearing: keyof typeof Bearing, hasToAlign: HasToAlign, expectedId: string }[] = [
  { desc: 'n(orth) of K is H', startingElementId: 'K', bearing: 'n', hasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: 'H' },
  { desc: 'n(orth)e(ast) of G is E', startingElementId: 'G', bearing: 'ne', hasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: 'E' },
  { desc: 'e(ast) of E is F', startingElementId: 'E', bearing: 'e', hasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: 'F' },
  { desc: 's(outh)e(ast) of E is I', startingElementId: 'E', bearing: 'se', hasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: 'I' },
  { desc: 's(outh) of B is E', startingElementId: 'B', bearing: 's', hasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: 'E' },
  { desc: 's(outh)w(est) of B is D', startingElementId: 'B', bearing: 'sw', hasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: 'D' },
  { desc: 'w(est) of I is H', startingElementId: 'I', bearing: 'w', hasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: 'H' },
  { desc: 'n(orth)w(est) of I is E', startingElementId: 'I', bearing: 'nw', hasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: 'E' },
]

assertNearestElementIds(simpleGridTests, 'simplegrid')

