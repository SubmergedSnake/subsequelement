
import { AlignmentOption, Bearing } from '../../../../src/types';
import { assertFarthestElementIds } from '../../utils/assertFarthestElementIds';

const simpleGridTests: { desc: string, startingElementId: string, bearing: keyof typeof Bearing, alignmentOption?: AlignmentOption, expectedId: string }[] = [
  { desc: 'farthest element s(outh)e(ast) of A is I (simplegrid)', startingElementId: 'A', bearing: 'se', alignmentOption: 'preferred', expectedId: 'I' },
  { desc: 'farthest element n(orth)e(ast) of G is C (simplegrid)', startingElementId: 'G', bearing: 'ne', alignmentOption: 'preferred', expectedId: 'C' },
  { desc: 'farthest element n(orth)w(est) of R is A (simplegrid)', startingElementId: 'R', bearing: 'nw', expectedId: 'A', alignmentOption: 'indifferent' },
  { desc: 'farthest element s(outh)w(est) of O is S (simplegrid)', startingElementId: 'O', bearing: 'sw', alignmentOption: 'preferred', expectedId: 'S' },
  { desc: 'farthest element s(outh)w(est) of C is G (simplegrid)', startingElementId: 'C', bearing: 'sw', alignmentOption: 'preferred', expectedId: 'G' },
  { desc: 'farthest element s(outh)w(est) of C is S (simplegrid)', startingElementId: 'C', bearing: 'sw', expectedId: 'S', alignmentOption: 'indifferent' },
]


assertFarthestElementIds(simpleGridTests, 'simplegrid')
