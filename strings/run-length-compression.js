/*
* s = "AAAABBBCCXYZDDDDEEEFFFB"
* "A4B3C2XYZD4E3F3B"
* */

const runLengthCompression = (s) => {
  let prev = '';
  let buffer = ''
  let lastCount = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (char !== prev) {
      prev = char;
      lastCount += 1
      buffer += lastCount > 1 ? String(lastCount) : '';
      buffer += char;
      lastCount = 0;
      continue
    }
    lastCount += 1
  }

  lastCount += 1
  buffer += lastCount > 1 ? String(lastCount) : '';

  return buffer;
}

module.exports = {
  runLengthCompression
}
