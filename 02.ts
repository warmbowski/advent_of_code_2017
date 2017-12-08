import { input02 } from './02-input';


const checksum = (input: string, func: (arr: string[]) => number) => {
  const rowArr = input.split('\n');
  return rowArr.reduce((a, c) => {
    const val = func(c.split('\t'));
    return a + val;
  }, 0);
};


const rowHLSum = (arr: string[]) => {
  let H = Number(arr[0]);
  let L = H;

  for (let i = 1; i < arr.length; i++) {
    const value = Number(arr[i]);
    if (value > H) H = value;
    if (value < L) L = value;
  }
  return H - L;
}

const rowDivSum = (arr: string[]) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const v1 = Number(arr[i]);
      const v2 = Number(arr[j]);
      if (v1 > v2) {
        if (v1 % v2 === 0) {
          return v1 / v2;
        }
      } else {
        if (v2 % v1 === 0) {
          return v2 / v1;
        }
      }
    }
  }
}


console.log('first part:', checksum(input02, rowHLSum));
console.log('second part:', checksum(input02, rowDivSum));
