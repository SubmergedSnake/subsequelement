import { AlignmentOption, Bearing } from '../../../../src/types';
import { assertNearestElementIds } from '../../utils/assertNearestElementIds';

const varyingSizesGridTests: { desc: string, startingElementId: string, bearing: keyof typeof Bearing, alignmentOption?: AlignmentOption, expectedId: string }[] = [
  { desc: 'e(ast) of A is B', startingElementId: 'A', bearing: 'e', alignmentOption: 'preferred', expectedId: 'B' },
  { desc: 'w(est) of C is B', startingElementId: 'C', bearing: 'w', alignmentOption: 'preferred', expectedId: 'B' },
  { desc: 'n(orth) of G is F', startingElementId: 'G', bearing: 'n', alignmentOption: 'preferred', expectedId: 'F' },
  { desc: 's(outh) of E is F', startingElementId: 'E', bearing: 's', alignmentOption: 'preferred', expectedId: 'F' },
]

assertNearestElementIds(varyingSizesGridTests, 'varyingsizes')

