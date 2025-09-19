import { AlignmentOption, Bearing } from '../../../../src/types';
import { assertFarthestElementIds } from '../../utils/assertFarthestElementIds';

const overLappingGridTests: { desc: string, startingElementId: string, bearing: keyof typeof Bearing, alignmentOption?: AlignmentOption, expectedId: string }[] = [
  { desc: 'C is north of B (overlappinggrid)', startingElementId: 'B', bearing: 'n', alignmentOption: 'preferred', expectedId: 'C' },
  { desc: 'C is south of A (overlappinggrid)', startingElementId: 'A', bearing: 's', alignmentOption: 'indifferent', expectedId: 'C' },
]


assertFarthestElementIds(overLappingGridTests, 'overlappinggrid')
