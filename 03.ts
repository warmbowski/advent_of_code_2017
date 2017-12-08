const input03 = 289326;


const makeCircleMem = (count) => {
  let boxNum = 0;
  let i = 1;

  while (i < count) {
    boxNum++;
    
    i = i + (8 * boxNum);
  }
  const sub = (i - count) % (2 * boxNum);
  return (2 * boxNum) - sub;
}

console.log('first part:', makeCircleMem(input03));
