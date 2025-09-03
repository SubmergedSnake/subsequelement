import { Bearing } from '../../../src/types';
import { assertClosestElementIds } from '../utils/assertClosestElementIds';

const irregularGridTests: { desc: string, startingElementId: string, bearing: keyof typeof Bearing, emphasizeAlign?: boolean, expectedId: string }[] = [
  { desc: 'e(ast) of B is C', startingElementId: 'B', bearing: 'e', emphasizeAlign: true, expectedId: 'C' },
  { desc: 'n(orth) of D is C', startingElementId: 'D', bearing: 'n', emphasizeAlign: true, expectedId: 'C' },
  { desc: 'w(est) of B is A', startingElementId: 'B', bearing: 'w', emphasizeAlign: true, expectedId: 'A' },
  { desc: 'w(est) of E is D', startingElementId: 'E', bearing: 'w', expectedId: 'D' },
  { desc: 's(outh)w(est) of E is C', startingElementId: 'E', bearing: 'sw', emphasizeAlign: true, expectedId: 'C' },
  { desc: 'n(orth)e(ast) of C is E', startingElementId: 'C', bearing: 'ne', emphasizeAlign: true, expectedId: 'E' },
  { desc: 'n(orth)w(est) of B is A', startingElementId: 'B', bearing: 'nw', emphasizeAlign: true, expectedId: 'A' },
  { desc: 'n(orth)w(est) of C is B', startingElementId: 'C', bearing: 'nw', emphasizeAlign: true, expectedId: 'B' },
  { desc: 's(outh) of B is C', startingElementId: 'B', bearing: 's', emphasizeAlign: true, expectedId: 'C' },
  { desc: 's(outh)e(ast) of B is C', startingElementId: 'B', bearing: 'se', emphasizeAlign: true, expectedId: 'C' },
]


assertClosestElementIds(irregularGridTests, 'irregulargrid')

