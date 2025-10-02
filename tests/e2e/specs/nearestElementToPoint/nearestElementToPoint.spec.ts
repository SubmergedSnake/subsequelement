
import { assertNearestElementToPoint } from '../../utils/assertNearestElementToPoint';
import { NearestElementToPointTest } from '../testtypes';

const pointTests: NearestElementToPointTest[] = [
	{ desc: 'bottom right of B is closest to B', point: { x: 613, y: 221 }, selectors: ['article'], expectedId: 'B' },
]


assertNearestElementToPoint(pointTests, 'nearesttopoint')
