/**
 * In this kata we want to convert a string into an integer.
 * The strings simply represent the numbers in words.
 *
 * Examples:
 * "one" => 1
 * "twenty" => 20
 * "two hundred forty-six" => 246
 * "seven hundred eighty-three thousand nine hundred and nineteen" => 783919
 *
 * Additional Notes:
 * - The minimum number is "zero" (inclusively)
 * - The maximum number, which must be supported is 1 million (inclusively)
 * - The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
 * - All tested numbers are valid, you don't need to validate them
 */

const mapStrToInt = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  thirty: 30,
  fourty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
}
const multiplier = {
  hundred: 100,
  thousand: 1000,
  million: 1000000,
}

const segmentEnd = {
  thousand: true,
  million: true,
}

function parseIntString(str) {
  const pieces = str.split(' ')
  // the running total
  let total = 0
  // the total before a multiplier
  let segment = 0

  for (let i = 0; i < pieces.length; i++) {
    const piece = pieces[i]
    if (piece === 'and') continue;

    const mult = multiplier[piece]
    if (!mult && !mapStrToInt[piece]) throw new Error('Invalid numeric string: ' + piece)

    if (mult) {
      segment *= mult
    } else {
      segment += mapStrToInt[piece]
    }

    if (segmentEnd[piece]) {
      total += segment
      segment = 0
    }
  }

  return total + segment
}

console.assert(parseIntString('one') === 1, 'one => 1')
console.assert(parseIntString('two') === 2, 'two => 2')
console.assert(parseIntString('thirteen') === 13, 'thirteen => 13')
console.assert(parseIntString('twenty one') === 21, 'twenty one => 21')
console.assert(parseIntString('thirty five') === 35, 'thirty five => 35')
console.assert(parseIntString('one hundred thirty five') === 135, 'one hundred thirty five => 135')
console.assert(parseIntString('three thousand thirty five') === 3035, 'three thousand thirty five => 3035')
console.assert(parseIntString('fifty five thousand') === 55000, 'fifty five thousand => 55000')
console.assert(parseIntString('two hundred three thousand thirty five') === 203035, 'two hundred three thousand thirty five => 203035')
console.assert(parseIntString('one million two hundred three thousand thirty five') === 1203035, 'one million two hundred three thousand thirty five => 1203035')
console.assert(parseIntString('one hundred and thirty five') === 135, 'one hundred and thirty five => 135')

try {
  parseIntString('one foo')
  throw new Error('should have failed')
} catch(e) {
  console.assert(e.message === 'Invalid numeric string: foo')
}