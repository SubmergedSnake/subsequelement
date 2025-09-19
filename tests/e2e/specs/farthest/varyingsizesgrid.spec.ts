import { AlignmentOption, Bearing } from '../../../../src/types';
import { assertFarthestElementIds } from '../../utils/assertFarthestElementIds';

const varyingSizesGridTests: { desc: string, startingElementId: string, bearing: keyof typeof Bearing, alignmentOption?: AlignmentOption, expectedId: string }[] = [
  { desc: 'absolutely farthest n(orth) of G is C (varyingsizes)', startingElementId: 'G', bearing: 'n', alignmentOption: 'indifferent', expectedId: 'C' },
]

assertFarthestElementIds(varyingSizesGridTests, 'varyingsizes')

