const input06 = [14, 0, 15, 12, 11, 11, 3, 5, 1, 6, 8, 4, 9, 1, 8, 4];
const test06 = [0, 2, 7, 0]


const memCycleLoopDetect = (banks: number[]) => {
  const size = banks.length;
  const memSigsDict = new Map<string, number>();
  let cycleCount = 0
  while (!memSigsDict.has(banks.join(','))) {
    memSigsDict.set(banks.join(','), cycleCount);
    banks = reallocateBanks(banks);
    cycleCount++;
  }
  return [ cycleCount, cycleCount - memSigsDict.get(banks.join(',')) ];
}

const reallocateBanks = (banks: number[]) => {
  const size = banks.length;
  const bankToReallocate = banks.reduce((acc, cur, idx, arr) => {
    return cur > arr[acc] ? idx : acc;
  }, 0);
  const valueToReallocate = banks[bankToReallocate];
  const quotient = Math.floor(valueToReallocate / size);
  const remainder = valueToReallocate % size;
  banks[bankToReallocate] = 0;

  banks.forEach((x, i) => {
    const index = (i + bankToReallocate + 1) % banks.length;
    const bonus = remainder - i - 1 >= 0 ? 1 : 0;
    banks[index] = banks[index] + quotient + bonus;
  })
  return banks;
}

console.log('first part:', memCycleLoopDetect(input06)[0]);
console.log('second part:', memCycleLoopDetect(input06)[1]);