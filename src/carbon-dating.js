const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

export default function dateSample(sampleActivity) {
	if (
		typeof sampleActivity !== 'string'
		|| sampleActivity <= 0
		|| sampleActivity > 15
		|| isNaN(sampleActivity)
	) return false

	sampleActivity = Number(sampleActivity)

	const a = Math.log(MODERN_ACTIVITY / sampleActivity);
	const k = Math.log(2) / HALF_LIFE_PERIOD;
	return Math.ceil(a / k);
}