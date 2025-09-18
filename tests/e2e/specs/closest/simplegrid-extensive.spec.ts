import { Bearing } from '../../../../src/types';
import { assertClosestElementIds } from '../../utils/assertClosestElementIds';

const simpleGridExtensiveTests: { desc: string, startingHTMLElementId: string, bearing: keyof typeof Bearing, preferAlignment: boolean, expectedId: string }[] = [
  { desc: 'e(ast) of Z is AA', startingHTMLElementId: 'Z', bearing: 'e', preferAlignment: true, expectedId: 'AA' },
  { desc: 's(outh) of CP is DD', startingHTMLElementId: 'CP', bearing: 's', preferAlignment: true, expectedId: 'DD' },
]

assertClosestElementIds(simpleGridExtensiveTests, 'simplegrid-extensive')
