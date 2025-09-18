import { Bearing } from '../../../../src/types';
import { assertClosestElementIds } from '../../utils/assertClosestElementIds';

const simpleGridTests: { desc: string, startingHTMLElementId: string, bearing: keyof typeof Bearing, preferAlignment: boolean, expectedId: string }[] = [
  { desc: 'n(orth) of K is H', startingHTMLElementId: 'K', bearing: 'n', preferAlignment: true, expectedId: 'H' },
  { desc: 'n(orth)e(ast) of G is E', startingHTMLElementId: 'G', bearing: 'ne', preferAlignment: true, expectedId: 'E' },
  { desc: 'e(ast) of E is F', startingHTMLElementId: 'E', bearing: 'e', preferAlignment: true, expectedId: 'F' },
  { desc: 's(outh)e(ast) of E is I', startingHTMLElementId: 'E', bearing: 'se', preferAlignment: true, expectedId: 'I' },
  { desc: 's(outh) of B is E', startingHTMLElementId: 'B', bearing: 's', preferAlignment: true, expectedId: 'E' },
  { desc: 's(outh)w(est) of B is D', startingHTMLElementId: 'B', bearing: 'sw', preferAlignment: true, expectedId: 'D' },
  { desc: 'w(est) of I is H', startingHTMLElementId: 'I', bearing: 'w', preferAlignment: true, expectedId: 'H' },
  { desc: 'n(orth)w(est) of I is E', startingHTMLElementId: 'I', bearing: 'nw', preferAlignment: true, expectedId: 'E' },
]

assertClosestElementIds(simpleGridTests, 'simplegrid')

