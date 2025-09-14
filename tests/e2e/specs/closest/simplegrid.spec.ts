import { Bearing } from '../../../../src/types';
import { assertClosestElementIds } from '../../utils/assertClosestElementIds';

const simpleGridTests: { desc: string, startingElementId: string, bearing: keyof typeof Bearing, emphasizeAlign: boolean, expectedId: string }[] = [
  { desc: 'n(orth) of K is H', startingElementId: 'K', bearing: 'n', emphasizeAlign: true, expectedId: 'H' },
  { desc: 'n(orth)e(ast) of G is E', startingElementId: 'G', bearing: 'ne', emphasizeAlign: true, expectedId: 'E' },
  { desc: 'e(ast) of E is F', startingElementId: 'E', bearing: 'e', emphasizeAlign: true, expectedId: 'F' },
  { desc: 's(outh)e(ast) of E is I', startingElementId: 'E', bearing: 'se', emphasizeAlign: true, expectedId: 'I' },
  { desc: 's(outh) of B is E', startingElementId: 'B', bearing: 's', emphasizeAlign: true, expectedId: 'E' },
  { desc: 's(outh)w(est) of B is D', startingElementId: 'B', bearing: 'sw', emphasizeAlign: true, expectedId: 'D' },
  { desc: 'w(est) of I is H', startingElementId: 'I', bearing: 'w', emphasizeAlign: true, expectedId: 'H' },
  { desc: 'n(orth)w(est) of I is E', startingElementId: 'I', bearing: 'nw', emphasizeAlign: true, expectedId: 'E' },
]

assertClosestElementIds(simpleGridTests, 'simplegrid')

