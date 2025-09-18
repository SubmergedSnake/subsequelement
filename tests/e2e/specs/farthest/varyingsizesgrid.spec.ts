import { Bearing } from '../../../../src/types';
import { assertFarthestElementIds } from '../../utils/assertFarthestElementIds';

const varyingSizesGridTests: { desc: string, startingHTMLElementId: string, bearing: keyof typeof Bearing, preferAlignment?: boolean, expectedId: string }[] = [
  { desc: 'absolutely furthest n(orth) of G is C (varyingsizes)', startingHTMLElementId: 'G', bearing: 'n', preferAlignment: false, expectedId: 'C' },
]

assertFarthestElementIds(varyingSizesGridTests, 'varyingsizes')

