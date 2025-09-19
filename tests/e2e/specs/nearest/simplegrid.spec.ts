import { AlignmentOption, Bearing } from '../../../../src/types';
import { assertNearestElementIds } from '../../utils/assertNearestElementIds';

const simpleGridTests: { desc: string, startingElementId: string, bearing: keyof typeof Bearing, alignmentOption: AlignmentOption, expectedId: string }[] = [
  { desc: 'n(orth) of K is H', startingElementId: 'K', bearing: 'n', alignmentOption: 'preferred', expectedId: 'H' },
  { desc: 'n(orth)e(ast) of G is E', startingElementId: 'G', bearing: 'ne', alignmentOption: 'preferred', expectedId: 'E' },
  { desc: 'e(ast) of E is F', startingElementId: 'E', bearing: 'e', alignmentOption: 'preferred', expectedId: 'F' },
  { desc: 's(outh)e(ast) of E is I', startingElementId: 'E', bearing: 'se', alignmentOption: 'preferred', expectedId: 'I' },
  { desc: 's(outh) of B is E', startingElementId: 'B', bearing: 's', alignmentOption: 'preferred', expectedId: 'E' },
  { desc: 's(outh)w(est) of B is D', startingElementId: 'B', bearing: 'sw', alignmentOption: 'preferred', expectedId: 'D' },
  { desc: 'w(est) of I is H', startingElementId: 'I', bearing: 'w', alignmentOption: 'preferred', expectedId: 'H' },
  { desc: 'n(orth)w(est) of I is E', startingElementId: 'I', bearing: 'nw', alignmentOption: 'preferred', expectedId: 'E' },
]

assertNearestElementIds(simpleGridTests, 'simplegrid')

