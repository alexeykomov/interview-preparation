process.stdin.resume();
process.stdin.setEncoding('utf8');


process.stdin.on('data', function(data) {
  const input = data.trim();
  const parts = input.split(' ');
  console.log(addition(parts[0], parts[1]));
  process.exit();
});

const addition = (a, b) => {
  let carry = 0;
  const answer = [];
  let index1 = a.length - 1
  let index2 = b.length - 1;
  while (index1 >= 0 || index2 >= 0) {
    const n1 = +a[index1] || 0;
    const n2 = +b[index2] || 0;
    if (index1 >= 0) { index1-- }
    if (index2 >= 0) { index2-- }
    let res = n1 + n2 + carry;
    if (res > 9) {
      res = res % 10;
      carry = 1;
      answer.push(res);
      continue;
    }
    carry = 0;
    answer.push(res);
  }
  if (carry) {
    answer.push(carry);
  }
  return answer.reverse().join('');
}
