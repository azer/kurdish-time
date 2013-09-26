var englishTime = require("english-time");
var units = englishTime.units;

var ku = {
  'mç': units.milliseconds,
  'miliçirke': units.milliseconds,

  'ç': units.seconds,
  'çirke': units.seconds,

  d: units.minutes,
  dq: units.minutes,
  deqe: units.minutes,

  s: units.hours,
  sehet: units.hours,

  r: units.days,
  roj: units.days,
  rojin: units.days,

  h: units.weeks,
  hefte: units.weeks
};

var singular = [
  'miliçirke', 'çirke', 'deqe', 'sehet', 'roj', 'hefte'
];

module.exports = kurdishTime;

function kurdishTime (input) {
  return englishTime(input, ku, singular);
}
