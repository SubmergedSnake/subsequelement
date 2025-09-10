import { Bearing } from '../../../src/types';
import { assertClosestElementIds } from '../utils/assertClosestElementIds';

const irregularGridTests: { desc: string, startingElementId: string, bearing: keyof typeof Bearing, preferAlignment?: boolean, expectedId: string }[] = [
  { desc: 'e(ast) of B is C', startingElementId: 'B', bearing: 'e', preferAlignment: false, expectedId: 'C' },
  { desc: 'n(orth) of D is C', startingElementId: 'D', bearing: 'n', preferAlignment: true, expectedId: 'C' },
  { desc: 'w(est) of B is A', startingElementId: 'B', bearing: 'w', preferAlignment: true, expectedId: 'A' },
  { desc: 's(outh) of E is D', startingElementId: 'E', bearing: 's', expectedId: 'D' },
  { desc: 's(outh)w(est) of E is C', startingElementId: 'E', bearing: 'sw', preferAlignment: true, expectedId: 'C' },
  { desc: 'n(orth)e(ast) of C is E', startingElementId: 'C', bearing: 'ne', preferAlignment: true, expectedId: 'E' },
  { desc: 'n(orth)w(est) of B is A', startingElementId: 'B', bearing: 'nw', preferAlignment: true, expectedId: 'A' },
  { desc: 'n(orth)w(est) of C is B', startingElementId: 'C', bearing: 'nw', preferAlignment: true, expectedId: 'B' },
  { desc: 's(outh) of B is C', startingElementId: 'B', bearing: 's', preferAlignment: true, expectedId: 'C' },
  { desc: 's(outh)e(ast) of B is C', startingElementId: 'B', bearing: 'se', preferAlignment: true, expectedId: 'C' },
]


assertClosestElementIds(irregularGridTests, 'irregulargrid')

