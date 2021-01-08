function encodeStr(str) {
  let enc = ''
  let s = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i+1]) {
      enc += str[i] + (i - s + 1)
      s = i + 1
    }
  }
  return enc
}

eq(encodeStr('a'), 'a1')
eq(encodeStr('ab'), 'a1b1')

function eq(a, b) {
  if (a !== b) {
    console.error(`Expected ${JSON.stringify(b)} to equal ${JSON.stringify(a)}`)
  }
}