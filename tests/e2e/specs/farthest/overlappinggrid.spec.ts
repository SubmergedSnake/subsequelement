import { Bearing } from '../../../../src/types';
import { assertFarthestElementIds } from '../../utils/assertFarthestElementIds';

const overLappingGridTests: { desc: string, startingHTMLElementId: string, bearing: keyof typeof Bearing, preferAlignment?: boolean, expectedId: string }[] = [
  { desc: 'C is north of B (overlappinggrid)', startingHTMLElementId: 'B', bearing: 'n', preferAlignment: true, expectedId: 'C' },
  { desc: 'C is south of A (overlappinggrid)', startingHTMLElementId: 'A', bearing: 's', preferAlignment: false, expectedId: 'C' },
]


assertFarthestElementIds(overLappingGridTests, 'overlappinggrid')
