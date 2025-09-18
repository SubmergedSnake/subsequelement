import { Bearing } from '../../../../src/types';
import { assertFarthestElementIds } from '../../utils/assertFarthestElementIds';

const simpleGridExtensiveTests: { desc: string, startingHTMLElementId: string, bearing: keyof typeof Bearing, preferAlignment?: boolean, expectedId: string }[] = [
  { desc: 'farthest element e(ast) of O is AB (simplegrid-extensive)', startingHTMLElementId: 'O', bearing: 'e', preferAlignment: true, expectedId: 'AB' },
  { desc: 'absolute farthest element s(outh)e(ast) of A is DI (simplegrid-extensive)', startingHTMLElementId: 'A', bearing: 'se', preferAlignment: false, expectedId: 'DI' },
  { desc: 'farthest element n(orth) of DO is F (simplegrid-extensive)', startingHTMLElementId: 'DO', bearing: 'n', preferAlignment: true, expectedId: 'F' },
  { desc: 'absolute farthest element s(outh)w(est) of L is DJ (simplegrid-extensive)', startingHTMLElementId: 'L', bearing: 'sw', preferAlignment: false, expectedId: 'DJ' },

]


assertFarthestElementIds(simpleGridExtensiveTests, 'simplegrid-extensive')
