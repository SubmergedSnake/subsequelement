
import { HasToAlign } from '../../../../src/types';
import { assertNearestElementIds } from '../../utils/assertNearestElementIds';
import { ElementIdTest } from '../testtypes';

const irregularGridTests: ElementIdTest[] = [
  { desc: 'C is north of B', startingElementId: 'B', bearing: 'n', hasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: 'C' },
  { desc: 'C is south of A', startingElementId: 'A', bearing: 's', hasToAlign: HasToAlign.NO, expectedId: 'C' },
]


assertNearestElementIds(irregularGridTests, 'overlappinggrid')
