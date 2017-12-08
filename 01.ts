import { input01 } from './01-input';


const sumMatchingDigits = (input: string, compare: (curr: string, arr: string[], idx: number) => boolean) => {
  const arr = input.split('');
  return arr.reduce((a, c, i, x) => {
    return compare(c, x, i) ? a + Number(c) : a
  }, 0);
}

const compareNextDigit = (curr: string, arr: string[], idx: number): boolean => {
  const next = arr[idx + 1] ? arr[idx + 1] : arr[0];
  return curr === next ? true : false;
};

const compareHalfWayDigit = (curr: string, arr: string[], idx: number): boolean => {
  const half = arr.length / 2;
  const next = arr[idx + half] ? arr[idx + half] : arr[idx - half];
  return curr === next ? true : false;
};


console.log('first part:', sumMatchingDigits(input01, compareNextDigit));
console.log('second part:', sumMatchingDigits(input01, compareHalfWayDigit));
