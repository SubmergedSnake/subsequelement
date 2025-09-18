import { Bearing } from '../../../../src/types';
import { assertFarthestElementIds } from '../../utils/assertFarthestElementIds';

const irregularGridTests: { desc: string, startingHTMLElementId: string, bearing: keyof typeof Bearing, preferAlignment?: boolean, expectedId: string }[] = [
  { desc: 'furthest n(orth)w(est) of D is A (irregulargrid)', startingHTMLElementId: 'D', bearing: 'nw', preferAlignment: true, expectedId: 'A' },
  { desc: 'absolute furthest e(ast) of A is E (irregulargrid)', startingHTMLElementId: 'A', bearing: 'e', preferAlignment: false, expectedId: 'E' },
]

assertFarthestElementIds(irregularGridTests, 'irregulargrid')
