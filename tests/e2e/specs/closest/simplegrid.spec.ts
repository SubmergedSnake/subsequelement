import { Bearing } from '../../../../src/types';
import { assertClosestElementIds } from '../../utils/assertClosestElementIds';

const simpleGridTests: { desc: string, startingElementId: string, bearing: keyof typeof Bearing, preferAlignment: boolean, expectedId: string }[] = [
  { desc: 'n(orth) of K is H', startingElementId: 'K', bearing: 'n', preferAlignment: true, expectedId: 'H' },
  { desc: 'n(orth)e(ast) of G is E', startingElementId: 'G', bearing: 'ne', preferAlignment: true, expectedId: 'E' },
  { desc: 'e(ast) of E is F', startingElementId: 'E', bearing: 'e', preferAlignment: true, expectedId: 'F' },
  { desc: 's(outh)e(ast) of E is I', startingElementId: 'E', bearing: 'se', preferAlignment: true, expectedId: 'I' },
  { desc: 's(outh) of B is E', startingElementId: 'B', bearing: 's', preferAlignment: true, expectedId: 'E' },
  { desc: 's(outh)w(est) of B is D', startingElementId: 'B', bearing: 'sw', preferAlignment: true, expectedId: 'D' },
  { desc: 'w(est) of I is H', startingElementId: 'I', bearing: 'w', preferAlignment: true, expectedId: 'H' },
  { desc: 'n(orth)w(est) of I is E', startingElementId: 'I', bearing: 'nw', preferAlignment: true, expectedId: 'E' },
]

assertClosestElementIds(simpleGridTests, 'simplegrid')

