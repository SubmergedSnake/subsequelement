
import { Bearing } from '../../../../src/types';
import { assertClosestElementIds } from '../../utils/assertClosestElementIds';

const irregularGridTests: { desc: string, startingHTMLElementId: string, bearing: keyof typeof Bearing, preferAlignment?: boolean, expectedId: string }[] = [
  { desc: 'C is north of B', startingHTMLElementId: 'B', bearing: 'n', preferAlignment: true, expectedId: 'C' },
  { desc: 'C is south of A', startingHTMLElementId: 'A', bearing: 's', preferAlignment: false, expectedId: 'C' },
]


assertClosestElementIds(irregularGridTests, 'overlappinggrid')
