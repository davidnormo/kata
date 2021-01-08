function primeFactors(n) {
  const factors = []
  let d = 2
  while (n > 1) {
    while (n % d === 0) {
      factors.push(d)
      n /= d
    }
    d++
  }

  return factors
}

intArrEq(primeFactors(1), [])
intArrEq(primeFactors(2), [2])
intArrEq(primeFactors(3), [3])
intArrEq(primeFactors(4), [2,2])
intArrEq(primeFactors(5), [5])
intArrEq(primeFactors(6), [2,3])
intArrEq(primeFactors(7), [7])
intArrEq(primeFactors(8), [2,2,2])
intArrEq(primeFactors(9), [3,3])
intArrEq(primeFactors(2 * 2 * 2 * 3 * 3 * 5), [2, 2, 2, 3, 3, 5])

function intArrEq(a,b) {
  if (JSON.stringify(a) !== JSON.stringify(b)) {
    console.error(`Expected match but they didn't:\n${JSON.stringify(a)}\n${JSON.stringify(b)}`)
  }
}