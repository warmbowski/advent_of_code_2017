import { input07, test07 } from './07-input';
import { totalmem } from 'os';

type NodeTree = Map<string, { wt: number, calls: Set<string> }>;

const createNodeTree = (input: string[]): NodeTree => {
  const nodeTree: NodeTree = new Map();

  input.forEach((x, i) => {
    const prog = x.split(' -> ');
    const progNameNum = prog[0].split(' (');
    const progName = progNameNum[0];
    const progWt = parseInt(progNameNum[1]);
    const progCallList = prog[1] ? prog[1].split(', ') : [];

    nodeTree.set(progName, {wt: progWt, calls: new Set(progCallList) });
  });

  return nodeTree;
};

const findBaseNode = (nodeTree: NodeTree): string => {
  const clonedTree = new Map(nodeTree);

  nodeTree.forEach((v, k) => {
    v.calls.forEach(x => {
      clonedTree.delete(x);
    });
  });

  return clonedTree.keys().next().value;
}

const getBranchWeight = (nodeTree: NodeTree, nodeName: string, dict: Map<number, number>): number => {
  const currNode = nodeTree.get(nodeName);
  let totWeight = 0;

  currNode.calls.forEach((prog) => {
    const branchWeight = getBranchWeight(nodeTree, prog, dict);
    totWeight += branchWeight;
    // console.log(branchWeight)
    // dict.has(branchWeight) ? dict.set(branchWeight, dict.get(branchWeight) + 1) : dict.set(branchWeight, 1);
  });
  return currNode.wt + totWeight;
}

const balanceTree = (nodeTree: NodeTree, nodeName: string) => {
  const balanceDict = new Map();
  const array = Array.from(nodeTree.get(baseNode).calls).map(prog => getBranchWeight(nodeTree, prog, balanceDict));
  // console.log(balanceDict)
  return array;
}

const nodeTree = createNodeTree(input07.split('\n'));
const baseNode = findBaseNode(nodeTree);
console.log('first part:', baseNode);
console.log('second part:', balanceTree(nodeTree, baseNode));
