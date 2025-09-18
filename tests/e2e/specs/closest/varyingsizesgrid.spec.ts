import { Bearing } from '../../../../src/types';
import { assertClosestElementIds } from '../../utils/assertClosestElementIds';

const varyingSizesGridTests: { desc: string, startingHTMLElementId: string, bearing: keyof typeof Bearing, preferAlignment?: boolean, expectedId: string }[] = [
  { desc: 'e(ast) of A is B', startingHTMLElementId: 'A', bearing: 'e', preferAlignment: true, expectedId: 'B' },
  { desc: 'w(est) of C is B', startingHTMLElementId: 'C', bearing: 'w', preferAlignment: true, expectedId: 'B' },
  { desc: 'n(orth) of G is F', startingHTMLElementId: 'G', bearing: 'n', preferAlignment: true, expectedId: 'F' },
  { desc: 's(outh) of E is F', startingHTMLElementId: 'E', bearing: 's', preferAlignment: true, expectedId: 'F' },
]

assertClosestElementIds(varyingSizesGridTests, 'varyingsizes')

