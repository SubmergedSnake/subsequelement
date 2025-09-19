import { HasToAlign, Bearing } from '../../../../src/types';
import { assertFarthestElementIds } from '../../utils/assertFarthestElementIds';
import { ElementIdTest } from '../testtypes';

const overLappingGridTests: ElementIdTest[] = [
  { desc: 'C is north of B (overlappinggrid)', startingElementId: 'B', bearing: 'n', hasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: 'C' },
  { desc: 'C is south of A (overlappinggrid)', startingElementId: 'A', bearing: 's', hasToAlign: HasToAlign.NO, expectedId: 'C' },
]


assertFarthestElementIds(overLappingGridTests, 'overlappinggrid')
