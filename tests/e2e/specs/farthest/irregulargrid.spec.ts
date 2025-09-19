import { HasToAlign, Bearing } from '../../../../src/types';
import { assertFarthestElementIds } from '../../utils/assertFarthestElementIds';

const irregularGridTests: { desc: string, startingElementId: string, bearing: keyof typeof Bearing, hasToAlign?: HasToAlign, expectedId: string }[] = [
  { desc: 'farthest n(orth)w(est) of D is A (irregulargrid)', startingElementId: 'D', bearing: 'nw', hasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: 'A' },
  { desc: 'absolute farthest e(ast) of A is E (irregulargrid)', startingElementId: 'A', bearing: 'e', hasToAlign: HasToAlign.NO, expectedId: 'E' },
]

assertFarthestElementIds(irregularGridTests, 'irregulargrid')
