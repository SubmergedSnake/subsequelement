import { Bearing } from '../../../../src/types';
import { assertFurthestElementIds } from '../../utils/assertFurthestElementIds';

const simpleGridExtensiveTests: { desc: string, startingElementId: string, bearing: keyof typeof Bearing, preferAlignment?: boolean, expectedId: string }[] = [
  { desc: 'furthest element e(ast) of O is AB', startingElementId: 'O', bearing: 'e', preferAlignment: true, expectedId: 'AB' },
  { desc: 'furthest element s(outh)e(ast) of A is DF', startingElementId: 'A', bearing: 'se', preferAlignment: true, expectedId: 'DF' },
  { desc: 'furthest element n(orth) of DO is F', startingElementId: 'DO', bearing: 'n', preferAlignment: true, expectedId: 'F' },
  { desc: 'absolute furthest element s(outh)w(est) of L is DJ', startingElementId: 'L', bearing: 'sw', preferAlignment: false, expectedId: 'DJ' },

]


assertFurthestElementIds(simpleGridExtensiveTests, 'simplegrid-extensive')
