import { Bearing } from '../../../../src/types';
import { assertFarthestElementIds } from '../../utils/assertFarthestElementIds';

const irregularGridTests: { desc: string, startingElementId: string, bearing: keyof typeof Bearing, preferAlignment?: boolean, expectedId: string }[] = [
  { desc: 'furthest n(orth)w(est) of D is A (irregulargrid)', startingElementId: 'D', bearing: 'nw', preferAlignment: true, expectedId: 'A' },
  { desc: 'absolute furthest e(ast) of A is E (irregulargrid)', startingElementId: 'A', bearing: 'e', preferAlignment: false, expectedId: 'E' },
]

assertFarthestElementIds(irregularGridTests, 'irregulargrid')
