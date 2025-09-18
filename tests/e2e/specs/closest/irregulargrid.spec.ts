import { Bearing } from '../../../../src/types';
import { assertClosestElementIds } from '../../utils/assertClosestElementIds';

const irregularGridTests: { desc: string, startingHTMLElementId: string, bearing: keyof typeof Bearing, preferAlignment?: boolean, expectedId: string }[] = [
  { desc: 'n(orth) of D is C', startingHTMLElementId: 'D', bearing: 'n', preferAlignment: true, expectedId: 'C' },
  { desc: 'w(est) of B is A', startingHTMLElementId: 'B', bearing: 'w', preferAlignment: true, expectedId: 'A' },
  { desc: 's(outh) of E is D', startingHTMLElementId: 'E', bearing: 's', expectedId: 'D' },
  { desc: 's(outh)w(est) of E is C', startingHTMLElementId: 'E', bearing: 'sw', preferAlignment: true, expectedId: 'C' },
  { desc: 'n(orth)e(ast) of C is E', startingHTMLElementId: 'C', bearing: 'ne', preferAlignment: true, expectedId: 'E' },
  { desc: 'n(orth)w(est) of B is A', startingHTMLElementId: 'B', bearing: 'nw', preferAlignment: true, expectedId: 'A' },
  { desc: 'n(orth)w(est) of C is B', startingHTMLElementId: 'C', bearing: 'nw', preferAlignment: true, expectedId: 'B' },
  { desc: 's(outh) of B is C', startingHTMLElementId: 'B', bearing: 's', preferAlignment: true, expectedId: 'C' },
  { desc: 's(outh)e(ast) of B is C', startingHTMLElementId: 'B', bearing: 'se', preferAlignment: true, expectedId: 'C' },
]


assertClosestElementIds(irregularGridTests, 'irregulargrid')

