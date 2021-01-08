/**
 * TEST:
 * Given an integer array containing the number of sandwiches
 * and the rest of hungry people (1 hungry to 10 full)
 * return the optimal sum of differences once the
 * sandwiches have been distributed
 */

function differences(people) {
  const diffs = []
  for (let i = 0; i < people.length - 1; i++) {
    diffs.push(Math.abs(people[i] - people[i + 1]))
  }
  return diffs
}

function sumDiffs(diffs) {
  return diffs.reduce((acc, x) => acc + x, 0)
}

function distributeFood(arr) {
  let [numFood, ...people] = arr

  let diffs = differences(people)
  let sum = sumDiffs(diffs)
  let nextPeople
  while (numFood--) {
    for (let i = 0; i < people.length; i++) {
      let tmpPeople = [...people]
      tmpPeople[i]++

      let tmpSum = sumDiffs(differences(tmpPeople))
      if (tmpSum <= sum) {
        sum = tmpSum
        nextPeople = tmpPeople
      }
    }
    people = nextPeople
  }
  return sum
}

console.assert(distributeFood([3,1,2]) === 0, '[3,1,2] === 0')
console.assert(distributeFood([5, 1, 2, 3]) === 0, '[5, 1, 2, 3] === 0')
console.assert(distributeFood([5, 1, 2, 10]) === 6, '[5, 1, 2, 10] === 6')