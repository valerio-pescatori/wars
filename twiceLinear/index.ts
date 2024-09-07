export const dblLinear = (n: number): number => {
  const u = [1];
  // generate n numbers
  let i = 0;
  let x = u[i];
  while (u.length < n) {
    // calc y and z
    const y = 2 * x + 1;
    const z = 3 * x + 1;
    // find where to put y and z in the least amount of time possible

    x;
    // update i and x
    i++;
    x = u[i];
  }
  return 0;
};
