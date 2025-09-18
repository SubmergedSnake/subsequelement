import { Bearing } from '../../../../src/types';
import { assertClosestElementIds } from '../../utils/assertClosestElementIds';

const bigAndSmallTests: { desc: string, startingHTMLElementId: string, bearing: keyof typeof Bearing, preferAlignment?: boolean, expectedId: string }[] = [
  { desc: 's(outh) of A is B', startingHTMLElementId: 'A', bearing: 's', preferAlignment: true, expectedId: 'B' },
]


assertClosestElementIds(bigAndSmallTests, 'bigandsmall')
