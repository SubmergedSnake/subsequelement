
import { Bearing } from '../../../src/types';
import { assertClosestElementIds } from '../utils/assertClosestElementIds';

const irregularGridTests: { desc: string, startingElementId: string, bearing: keyof typeof Bearing, preferAlignment?: boolean, expectedId: string }[] = [
  { desc: 'C is north of B', startingElementId: 'B', bearing: 'n', preferAlignment: true, expectedId: 'C' },
  { desc: 'C is south of A', startingElementId: 'A', bearing: 's', preferAlignment: false, expectedId: 'C' },
]


assertClosestElementIds(irregularGridTests, 'overlappinggrid')
