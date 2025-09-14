import { Bearing } from '../../../../src/types';
import { assertFurthestElementIds } from '../../utils/assertFurthestElementIds';

const irregularGridTests: { desc: string, startingElementId: string, bearing: keyof typeof Bearing, preferAlignment?: boolean, expectedId: string }[] = [
  { desc: 'furthest n(orth)w(est) of D is A', startingElementId: 'D', bearing: 'nw', preferAlignment: true, expectedId: 'A' },
  { desc: 'furthest but most aligned e(ast) of A is E', startingElementId: 'A', bearing: 'e', preferAlignment: true, expectedId: 'E' },
  { desc: 'absolute furthest e(ast) of A is D', startingElementId: 'A', bearing: 'e', preferAlignment: false, expectedId: 'D' },
]

assertFurthestElementIds(irregularGridTests, 'irregulargrid')
