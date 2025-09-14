import { Bearing } from '../../../../src/types';
import { assertFurthestElementIds } from '../../utils/assertFurthestElementIds';

const overLappingGridTests: { desc: string, startingElementId: string, bearing: keyof typeof Bearing, preferAlignment?: boolean, expectedId: string }[] = [
  { desc: 'C is north of B', startingElementId: 'B', bearing: 'n', preferAlignment: true, expectedId: 'C' },
  { desc: 'C is south of A', startingElementId: 'A', bearing: 's', preferAlignment: false, expectedId: 'C' },
]


assertFurthestElementIds(overLappingGridTests, 'overlappinggrid')
