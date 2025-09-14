import { Bearing } from '../../../../src/types';
import { assertFurthestElementIds } from '../../utils/assertFurthestElementIds';

const varyingSizesGridTests: { desc: string, startingElementId: string, bearing: keyof typeof Bearing, preferAlignment?: boolean, expectedId: string }[] = [
  { desc: 'absolutely furthest n(orth) of G is C', startingElementId: 'G', bearing: 'n', preferAlignment: false, expectedId: 'C' },
]

assertFurthestElementIds(varyingSizesGridTests, 'varyingsizes')

