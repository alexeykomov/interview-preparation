const flattenIter = (arr) => {
  const stack = [...arr];
  const res = [];
  while (stack.length) {
    const current = stack.pop()
    if (Array.isArray(current)) {
      stack.push(...current);
      continue;
    }
    res.push(current)
  }
  res.reverse();
  return res;
}

module.exports = {
  flattenIter
}
