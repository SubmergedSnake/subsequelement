import { AlignmentOption, Bearing } from '../../../../src/types';
import { assertFarthestElementIds } from '../../utils/assertFarthestElementIds';

const irregularGridTests: { desc: string, startingElementId: string, bearing: keyof typeof Bearing, alignmentOption?: AlignmentOption, expectedId: string }[] = [
  { desc: 'farthest n(orth)w(est) of D is A (irregulargrid)', startingElementId: 'D', bearing: 'nw', alignmentOption: 'preferred', expectedId: 'A' },
  { desc: 'absolute farthest e(ast) of A is E (irregulargrid)', startingElementId: 'A', bearing: 'e', alignmentOption: 'indifferent', expectedId: 'E' },
]

assertFarthestElementIds(irregularGridTests, 'irregulargrid')
