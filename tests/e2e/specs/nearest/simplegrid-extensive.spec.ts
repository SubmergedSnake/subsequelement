import { HasToAlign, Bearing } from '../../../../src/types';
import { assertNearestElementIds } from '../../utils/assertNearestElementIds';

const simpleGridExtensiveTests: { desc: string, startingElementId: string, bearing: keyof typeof Bearing, HasToAlign: HasToAlign, expectedId: string }[] = [
  { desc: 'e(ast) of Z is AA', startingElementId: 'Z', bearing: 'e', HasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: 'AA' },
  { desc: 's(outh) of CP is DD', startingElementId: 'CP', bearing: 's', HasToAlign: HasToAlign.ASMUCHASPOSSIBLE, expectedId: 'DD' },
]

assertNearestElementIds(simpleGridExtensiveTests, 'simplegrid-extensive')
