
import { AlignmentOption, Bearing } from '../../../../src/types';
import { assertNearestElementIds } from '../../utils/assertNearestElementIds';

const irregularGridTests: { desc: string, startingElementId: string, bearing: keyof typeof Bearing, alignmentOption?: AlignmentOption, expectedId: string }[] = [
  { desc: 'C is north of B', startingElementId: 'B', bearing: 'n', alignmentOption: 'preferred', expectedId: 'C' },
  { desc: 'C is south of A', startingElementId: 'A', bearing: 's', alignmentOption: 'indifferent', expectedId: 'C' },
]


assertNearestElementIds(irregularGridTests, 'overlappinggrid')
