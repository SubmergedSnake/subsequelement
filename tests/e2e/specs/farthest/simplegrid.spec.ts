
import { Bearing } from '../../../../src/types';
import { assertFarthestElementIds } from '../../utils/assertFarthestElementIds';

const simpleGridTests: { desc: string, startingElementId: string, bearing: keyof typeof Bearing, preferAlignment?: boolean, expectedId: string }[] = [
  { desc: 'furthest element s(outh)e(ast) of A is I (simplegrid)', startingElementId: 'A', bearing: 'se', preferAlignment: true, expectedId: 'I' },
  { desc: 'furthest element n(orth)e(ast) of G is C (simplegrid)', startingElementId: 'G', bearing: 'ne', preferAlignment: true, expectedId: 'C' },
  { desc: 'furthest element n(orth)w(est) of R is A (simplegrid)', startingElementId: 'R', bearing: 'nw', expectedId: 'A', preferAlignment: false },
  { desc: 'furthest element s(outh)w(est) of O is S (simplegrid)', startingElementId: 'O', bearing: 'sw', preferAlignment: true, expectedId: 'S' },
  { desc: 'furthest element s(outh)w(est) of C is G (simplegrid) (emphasizeAlign = true)', startingElementId: 'C', bearing: 'sw', preferAlignment: true, expectedId: 'G' },
  { desc: 'furthest element s(outh)w(est) of C is S (simplegrid)', startingElementId: 'C', bearing: 'sw', expectedId: 'S', preferAlignment: false },
]


assertFarthestElementIds(simpleGridTests, 'simplegrid')
