import { HasToAlign } from '../../../../src/types';
import { assertFarthestElementIds } from '../../utils/assertFarthestElementIds';
import { ElementIdTest } from '../testtypes';

const overLappingGridTests: ElementIdTest[] = [
  { desc: 'A is farthest north of B (overlappinggrid)', startingElementId: 'B', bearing: 'n', hasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: 'A' },
  { desc: 'C is farthest south of A (overlappinggrid)', startingElementId: 'A', bearing: 's', hasToAlign: HasToAlign.NO, expectedId: 'C' },
]


assertFarthestElementIds(overLappingGridTests, 'overlappinggrid')
