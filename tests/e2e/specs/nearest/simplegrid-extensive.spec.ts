import { AlignmentOption, Bearing } from '../../../../src/types';
import { assertNearestElementIds } from '../../utils/assertNearestElementIds';

const simpleGridExtensiveTests: { desc: string, startingElementId: string, bearing: keyof typeof Bearing, alignmentOption: AlignmentOption, expectedId: string }[] = [
  { desc: 'e(ast) of Z is AA', startingElementId: 'Z', bearing: 'e', alignmentOption: 'preferred', expectedId: 'AA' },
  { desc: 's(outh) of CP is DD', startingElementId: 'CP', bearing: 's', alignmentOption: 'preferred', expectedId: 'DD' },
]

assertNearestElementIds(simpleGridExtensiveTests, 'simplegrid-extensive')
