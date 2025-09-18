import { Bearing } from '../../../../src/types';
import { assertClosestElementIds } from '../../utils/assertClosestElementIds';

const simpleGridExtensiveTests: { desc: string, startingElementId: string, bearing: keyof typeof Bearing, preferAlignment: boolean, expectedId: string }[] = [
  { desc: 'e(ast) of Z is AA', startingElementId: 'Z', bearing: 'e', preferAlignment: true, expectedId: 'AA' },
  { desc: 's(outh) of CP is DD', startingElementId: 'CP', bearing: 's', preferAlignment: true, expectedId: 'DD' },
]

assertClosestElementIds(simpleGridExtensiveTests, 'simplegrid-extensive')
