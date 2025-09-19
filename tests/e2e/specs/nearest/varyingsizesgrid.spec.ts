import { HasToAlign, Bearing } from '../../../../src/types';
import { assertNearestElementIds } from '../../utils/assertNearestElementIds';

const varyingSizesGridTests: { desc: string, startingElementId: string, bearing: keyof typeof Bearing, HasToAlign?: HasToAlign, expectedId: string }[] = [
  { desc: 'e(ast) of A is B', startingElementId: 'A', bearing: 'e', HasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: 'B' },
  { desc: 'w(est) of C is B', startingElementId: 'C', bearing: 'w', HasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: 'B' },
  { desc: 'n(orth) of G is F', startingElementId: 'G', bearing: 'n', HasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: 'F' },
  { desc: 's(outh) of E is F', startingElementId: 'E', bearing: 's', HasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: 'F' },
]

assertNearestElementIds(varyingSizesGridTests, 'varyingsizes')

