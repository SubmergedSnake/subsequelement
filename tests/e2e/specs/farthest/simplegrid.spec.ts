
import { HasToAlign, Bearing } from '../../../../src/types';
import { assertFarthestElementIds } from '../../utils/assertFarthestElementIds';

const simpleGridTests: { desc: string, startingElementId: string, bearing: keyof typeof Bearing, hasToAlign?: HasToAlign, expectedId: string }[] = [
  { desc: 'farthest element s(outh)e(ast) of A is I (simplegrid)', startingElementId: 'A', bearing: 'se', hasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: 'I' },
  { desc: 'farthest element n(orth)e(ast) of G is C (simplegrid)', startingElementId: 'G', bearing: 'ne', hasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: 'C' },
  { desc: 'farthest element n(orth)w(est) of R is A (simplegrid)', startingElementId: 'R', bearing: 'nw', expectedId: 'A', hasToAlign: HasToAlign.NO },
  { desc: 'farthest element s(outh)w(est) of O is S (simplegrid)', startingElementId: 'O', bearing: 'sw', hasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: 'S' },
  { desc: 'farthest element s(outh)w(est) of C is G (simplegrid)', startingElementId: 'C', bearing: 'sw', hasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: 'G' },
  { desc: 'farthest element s(outh)w(est) of C is S (simplegrid)', startingElementId: 'C', bearing: 'sw', expectedId: 'S', hasToAlign: HasToAlign.NO },
]


assertFarthestElementIds(simpleGridTests, 'simplegrid')
