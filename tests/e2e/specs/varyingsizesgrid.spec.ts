import { Bearing } from '../../../src/types';
import { assertClosestElementIds } from '../utils/assertClosestElementIds';

const varyingSizesGridTests: { desc: string, startingElementId: string, bearing: keyof typeof Bearing, emphasizeAlign?: boolean, expectedId: string }[] = [
  { desc: 'e(ast) of A is B', startingElementId: 'A', bearing: 'e', emphasizeAlign: true, expectedId: 'B' },
  { desc: 'w(est) of C is B', startingElementId: 'C', bearing: 'w', emphasizeAlign: true, expectedId: 'B' },
  { desc: 'n(orth) of G is F', startingElementId: 'G', bearing: 'n', emphasizeAlign: true, expectedId: 'F' },
  { desc: 's(outh) of E is F', startingElementId: 'E', bearing: 's', emphasizeAlign: true, expectedId: 'F' },
]

assertClosestElementIds(varyingSizesGridTests, 'varyingsizes')

