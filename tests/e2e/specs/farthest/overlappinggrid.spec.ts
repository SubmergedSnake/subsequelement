import { HasToAlign, Bearing } from '../../../../src/types';
import { assertFarthestElementIds } from '../../utils/assertFarthestElementIds';

const overLappingGridTests: { desc: string, startingElementId: string, bearing: keyof typeof Bearing, hasToAlign?: HasToAlign, expectedId: string }[] = [
  { desc: 'C is north of B (overlappinggrid)', startingElementId: 'B', bearing: 'n', hasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: 'C' },
  { desc: 'C is south of A (overlappinggrid)', startingElementId: 'A', bearing: 's', hasToAlign: HasToAlign.NO, expectedId: 'C' },
]


assertFarthestElementIds(overLappingGridTests, 'overlappinggrid')
