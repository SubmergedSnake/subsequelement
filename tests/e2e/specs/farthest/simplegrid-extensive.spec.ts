import { Bearing } from '../../../../src/types';
import { assertFarthestElementIds } from '../../utils/assertFarthestElementIds';

const simpleGridExtensiveTests: { desc: string, startingElementId: string, bearing: keyof typeof Bearing, preferAlignment?: boolean, expectedId: string }[] = [
  { desc: 'farthest element e(ast) of O is AB (simplegrid-extensive)', startingElementId: 'O', bearing: 'e', preferAlignment: true, expectedId: 'AB' },
  { desc: 'absolute farthest element s(outh)e(ast) of A is DI (simplegrid-extensive)', startingElementId: 'A', bearing: 'se', preferAlignment: false, expectedId: 'DI' },
  { desc: 'farthest element n(orth) of DO is F (simplegrid-extensive)', startingElementId: 'DO', bearing: 'n', preferAlignment: true, expectedId: 'F' },
  { desc: 'absolute farthest element s(outh)w(est) of L is DJ (simplegrid-extensive)', startingElementId: 'L', bearing: 'sw', preferAlignment: false, expectedId: 'DJ' },

]


assertFarthestElementIds(simpleGridExtensiveTests, 'simplegrid-extensive')
