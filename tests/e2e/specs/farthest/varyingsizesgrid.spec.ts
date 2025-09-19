import { HasToAlign } from '../../../../src/types';
import { assertFarthestElementIds } from '../../utils/assertFarthestElementIds';
import { ElementIdTest } from '../testtypes';

const varyingSizesGridTests: ElementIdTest[] = [
  { desc: 'absolutely farthest n(orth) of G is C (varyingsizes)', startingElementId: 'G', bearing: 'n', hasToAlign: HasToAlign.NO, expectedId: 'C' },
]

assertFarthestElementIds(varyingSizesGridTests, 'varyingsizes')

