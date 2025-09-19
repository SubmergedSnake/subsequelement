import { HasToAlign, Bearing } from '../../../../src/types';
import { assertNearestElementIds } from '../../utils/assertNearestElementIds';

const bigAndSmallTests: { desc: string, startingElementId: string, bearing: keyof typeof Bearing, HasToAlign?: HasToAlign, expectedId: string }[] = [
  { desc: 's(outh) of A is B', startingElementId: 'A', bearing: 's', HasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: 'B' },
]


assertNearestElementIds(bigAndSmallTests, 'bigandsmall')
