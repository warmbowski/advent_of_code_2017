import { input05 } from './05-input';


const stepsToExitMaze = (input: number[], offset?: (v: number) => number): number => {
  let steps = 0;
  let pos = 0;
  let maze = input;

  while (pos >= 0 && pos < maze.length) {
    const value = Number(maze[pos]);
    maze[pos] = offset ? offset(value) : value + 1;
    pos += value;
    steps++;
  }
  return steps;
}

const jumpOverride = (v) => v > 2 ? v - 1 : v + 1; 


const list = input05.split('\n');
console.log('first part:', stepsToExitMaze(list.map(x => Number(x))));
console.log('second part:', stepsToExitMaze(list.map(x => Number(x)), jumpOverride));
