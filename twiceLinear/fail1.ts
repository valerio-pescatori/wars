// Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]
export const dblLinear = (n: number): number => {
  let u = [1];
  let i = 0;
  let x = u[i];
  // O(n) to generate the array
  while (u.length < n) {
    u.push(2 * x + 1);
    heapInsert(u, u.length - 1);
    u.push(3 * x + 1);
    heapInsert(u, u.length - 1);
    i++;
    x = u[i];
  }

  // heapSort
  u = heapSort(u);
  // O(1) to get the nth number
  return u[n - 1];
};

const heapInsert = (tree: number[], currPos: number) => {
  if (currPos === 0) return;
  const curr = tree[currPos];
  const parentPos = Math.floor((currPos - 1) / 2);
  const parent = tree[parentPos];
  if (curr < parent) {
    //swap
    tree[parentPos] = curr;
    tree[currPos] = parent;
    // should recurse up until root
    heapInsert(tree, parentPos);
  }
};

const heapSort = (tree: number[]) => {
  // move first item at the and, heapify and reduce heap size
  const sorted: number[] = [];
  while (tree.length > 0) {
    const root = tree.splice(0, 1)[0];
    sorted.push(root);
    heapify(tree);
  }
  return sorted;
};

const heapify = (tree: number[], i = 0) => {
  const curr = tree[i];
  const l = 2 * i + 1;
  const r = 2 * i + 2;

  // stop if the current subtree is valid min-heap
  if (!((tree[l] !== undefined && tree[l] < curr) || (tree[r] !== undefined && tree[r] < curr))) return;
  if (i > Math.floor(tree.length / 2))
    // stop if the current node is a leaf
    return;
  // else we must swap and recursively iterate on childrens
  const swapIdx = tree[l] === undefined ? r : tree[r] === undefined ? l : tree[l] < tree[r] ? l : r;
  const app = tree[i];
  tree[i] = tree[swapIdx];
  tree[swapIdx] = app;
  // recursion to swapIdx
  heapify(tree, swapIdx);
};

console.log(dblLinear(20));
