import { HasToAlign, Bearing } from '../../../../src/types';
import { assertNearestElementIds } from '../../utils/assertNearestElementIds';
import { ElementIdTest } from '../testtypes';

const bigAndSmallTests: ElementIdTest[] = [
  { desc: 's(outh) of A is B', startingElementId: 'A', bearing: 's', hasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: 'B' },
]


assertNearestElementIds(bigAndSmallTests, 'bigandsmall')
