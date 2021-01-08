/**
 * Given n, take the sum of the digits of n.
 * If that value has more than one digit, continue reducing in this way
 * until a single-digit number is produced. The input will be a
 * non-negative integer.
 */

function digitalRoot(n) {
  while (n.toString().length > 1) {
    n = sumDigits(n)
  }
  return n
}

function sumDigits(n) {
  const nStr = n.toString()
  if (!n) return 0

  return parseInt(nStr[0], 10) + sumDigits(nStr.slice(1))
}

console.assert(digitalRoot(11) === 2, '11 => 2')
console.assert(digitalRoot(55) === 1, '55 => 1')
console.assert(digitalRoot(999) === 9, '999 => 9')
console.assert(digitalRoot(9782348768) === 8, '9782348768 => 8')