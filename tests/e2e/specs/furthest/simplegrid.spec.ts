
import { Bearing } from '../../../../src/types';
import { assertFurthestElementIds } from '../../utils/assertFurthestElementIds';

const simpleGridTests: { desc: string, startingElementId: string, bearing: keyof typeof Bearing, preferAlignment?: boolean, expectedId: string }[] = [
  { desc: 'furthest element s(outh)e(ast) of A is I', startingElementId: 'A', bearing: 'se', preferAlignment: true, expectedId: 'I' },
  { desc: 'furthest element n(orth)e(ast) of G is C', startingElementId: 'G', bearing: 'ne', preferAlignment: true, expectedId: 'C' },
  { desc: 'furthest element n(orth)w(est) of R is A', startingElementId: 'R', bearing: 'nw', expectedId: 'A', preferAlignment: false },
  { desc: 'furthest element s(outh)w(est) of O is S', startingElementId: 'O', bearing: 'sw', preferAlignment: true, expectedId: 'S' },
  { desc: 'furthest element s(outh)w(est) of C is G (emphasizeAlign = true)', startingElementId: 'C', bearing: 'sw', preferAlignment: true, expectedId: 'G' },
  { desc: 'furthest element s(outh)w(est) of C is S', startingElementId: 'C', bearing: 'sw', expectedId: 'S', preferAlignment: false },
]


assertFurthestElementIds(simpleGridTests, 'simplegrid')
