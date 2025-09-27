import { HasToAlign } from '../../../../src/types';
import { assertNearestElementIds } from '../../utils/assertNearestElementIds';
import { ElementIdTest } from '../testtypes';

const simpleGridExtensiveTests: ElementIdTest[] = [
  { desc: 'e(ast) of Z is AA', startingElementId: 'Z', bearing: 'e', hasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: 'AA' },
  { desc: 's(outh) of CP is DD', startingElementId: 'CP', bearing: 's', hasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: 'DD' },
  { desc: 'w(est) of CZ is CY', startingElementId: 'CZ', bearing: 'w', hasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: 'CY' },

]

assertNearestElementIds(simpleGridExtensiveTests, 'simplegrid-extensive')
