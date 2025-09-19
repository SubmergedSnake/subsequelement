import { HasToAlign, Bearing } from '../../../../src/types';
import { assertFarthestElementIds } from '../../utils/assertFarthestElementIds';

const varyingSizesGridTests: { desc: string, startingElementId: string, bearing: keyof typeof Bearing, hasToAlign?: HasToAlign, expectedId: string }[] = [
  { desc: 'absolutely farthest n(orth) of G is C (varyingsizes)', startingElementId: 'G', bearing: 'n', hasToAlign: HasToAlign.NO, expectedId: 'C' },
]

assertFarthestElementIds(varyingSizesGridTests, 'varyingsizes')

