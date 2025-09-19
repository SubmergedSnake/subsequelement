
import { HasToAlign, Bearing } from '../../../../src/types';
import { assertNearestElementIds } from '../../utils/assertNearestElementIds';

const irregularGridTests: { desc: string, startingElementId: string, bearing: keyof typeof Bearing, hasToAlign?: HasToAlign, expectedId: string }[] = [
  { desc: 'C is north of B', startingElementId: 'B', bearing: 'n', hasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: 'C' },
  { desc: 'C is south of A', startingElementId: 'A', bearing: 's', hasToAlign: HasToAlign.NO, expectedId: 'C' },
]


assertNearestElementIds(irregularGridTests, 'overlappinggrid')
