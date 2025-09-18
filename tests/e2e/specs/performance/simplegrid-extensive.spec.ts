import { assertPerformance, PerformanceTest } from '../../utils/assertPerformance';

const performanceTest: PerformanceTest = { desc: 'average duration for single step is below 3 ms', startingHTMLElementId: 'A', bearing: 's', preferAlignment: true, steps: 30, maxDuration: 3 }

assertPerformance(performanceTest, 'simplegrid-extensive')

