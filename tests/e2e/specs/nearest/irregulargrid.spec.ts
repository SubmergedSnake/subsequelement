import { AlignmentOption, Bearing } from '../../../../src/types';
import { assertNearestElementIds } from '../../utils/assertNearestElementIds';

const irregularGridTests: { desc: string, startingElementId: string, bearing: keyof typeof Bearing, alignmentOption?: AlignmentOption, expectedId: string }[] = [
  { desc: 'n(orth) of D is C (irregulargrid)', startingElementId: 'D', bearing: 'n', expectedId: 'C' },
  { desc: 'w(est) of B is A (irregulargrid)', startingElementId: 'B', bearing: 'w', expectedId: 'A' },
  { desc: 's(outh) of E is D (irregulargrid)', startingElementId: 'E', bearing: 's', expectedId: 'D' },
  { desc: 's(outh)w(est) of E is C (irregulargrid)', startingElementId: 'E', bearing: 'sw', expectedId: 'C' },
  { desc: 'n(orth)e(ast) of C is E (irregulargrid)', startingElementId: 'C', bearing: 'ne', expectedId: 'E' },
  { desc: 'n(orth)w(est) of B is A (irregulargrid)', startingElementId: 'B', bearing: 'nw', expectedId: 'A' },
  { desc: 'n(orth)w(est) of C is B (irregulargrid)', startingElementId: 'C', bearing: 'nw', expectedId: 'B' },
  { desc: 's(outh) of B is C (irregulargrid)', startingElementId: 'B', bearing: 's', expectedId: 'C' },
  { desc: 's(outh)e(ast) of B is C (irregulargrid)', startingElementId: 'B', bearing: 'se', expectedId: 'C' },
]


assertNearestElementIds(irregularGridTests, 'irregulargrid')

