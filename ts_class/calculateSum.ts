const _calculateSum = (
  a: number,
  b: number,
  type: 'mul' | 'sub' | 'add' | 'div'
) => {
  if (type === 'mul') {
    return a * b;
  }
  if (type === 'sub') {
    return a - b;
  }
  if (type === 'add') {
    return a + b;
  }
  if (type === 'div') {
    return a / b;
  }
  return -1;
};

const x: number = _calculateSum(200, 500, 'div');
console.log(x);
