import { HasToAlign, Bearing } from '../../../../src/types';
import { assertFarthestElementIds } from '../../utils/assertFarthestElementIds';
import { ElementIdTest } from '../testtypes';

const simpleGridExtensiveTests: ElementIdTest[] = [
  { desc: 'farthest element e(ast) of O is AB (simplegrid-extensive)', startingElementId: 'O', bearing: 'e', hasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: 'AB' },
  { desc: 'absolute farthest element s(outh)e(ast) of A is DI (simplegrid-extensive)', startingElementId: 'A', bearing: 'se', hasToAlign: HasToAlign.NO, expectedId: 'DI' },
  { desc: 'farthest element n(orth) of DO is F (simplegrid-extensive)', startingElementId: 'DO', bearing: 'n', hasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: 'F' },
  { desc: 'absolute farthest element s(outh)w(est) of L is DJ (simplegrid-extensive)', startingElementId: 'L', bearing: 'sw', hasToAlign: HasToAlign.NO, expectedId: 'DJ' },

]


assertFarthestElementIds(simpleGridExtensiveTests, 'simplegrid-extensive')
