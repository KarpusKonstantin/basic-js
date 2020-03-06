const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity != 'string' || sampleActivity.includes(' ') == true || sampleActivity == 0) {
    return false;
  }
  let k = 0.693 / HALF_LIFE_PERIOD;
  let t = (Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity))) / k;

  if (t > 0) {
    return Math.trunc(t) + 1;
  } else {
    return false;
  }
};
