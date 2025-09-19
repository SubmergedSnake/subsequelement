import { HasToAlign } from '../../../../src/types';
import { assertPerformance } from '../../utils/assertPerformance';
import { PerformanceTest } from '../testtypes';

const performanceTest: PerformanceTest = { desc: 'average duration for single step is below 3 ms', startingElementId: 'A', bearing: 's', hasToAlign: HasToAlign.YES, steps: 30, maxDuration: 3 }

assertPerformance(performanceTest, 'simplegrid-extensive')

