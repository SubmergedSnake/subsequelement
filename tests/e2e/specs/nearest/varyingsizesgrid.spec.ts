import { HasToAlign } from '../../../../src/types';
import { assertNearestElementIds } from '../../utils/assertNearestElementIds';
import { ElementIdTest } from '../testtypes';

const varyingSizesGridTests: ElementIdTest[] = [
  { desc: 'e(ast) of A is B', startingElementId: 'A', bearing: 'e', hasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: 'B' },
  { desc: 'w(est) of C is B', startingElementId: 'C', bearing: 'w', hasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: 'B' },
  { desc: 'n(orth) of G is F', startingElementId: 'G', bearing: 'n', hasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: 'F' },
  { desc: 's(outh) of E is F', startingElementId: 'E', bearing: 's', hasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: 'F' },
]

assertNearestElementIds(varyingSizesGridTests, 'varyingsizes')

