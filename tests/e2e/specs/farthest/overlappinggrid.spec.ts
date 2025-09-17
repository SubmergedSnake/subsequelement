import { Bearing } from '../../../../src/types';
import { assertFarthestElementIds } from '../../utils/assertFarthestElementIds';

const overLappingGridTests: { desc: string, startingElementId: string, bearing: keyof typeof Bearing, preferAlignment?: boolean, expectedId: string }[] = [
  { desc: 'C is north of B (overlappinggrid)', startingElementId: 'B', bearing: 'n', preferAlignment: true, expectedId: 'C' },
  { desc: 'C is south of A (overlappinggrid)', startingElementId: 'A', bearing: 's', preferAlignment: false, expectedId: 'C' },
]


assertFarthestElementIds(overLappingGridTests, 'overlappinggrid')
