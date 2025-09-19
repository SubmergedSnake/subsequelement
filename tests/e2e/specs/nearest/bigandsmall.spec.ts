import { AlignmentOption, Bearing } from '../../../../src/types';
import { assertNearestElementIds } from '../../utils/assertNearestElementIds';

const bigAndSmallTests: { desc: string, startingElementId: string, bearing: keyof typeof Bearing, alignmentOption?: AlignmentOption, expectedId: string }[] = [
  { desc: 's(outh) of A is B', startingElementId: 'A', bearing: 's', alignmentOption: 'preferred', expectedId: 'B' },
]


assertNearestElementIds(bigAndSmallTests, 'bigandsmall')
