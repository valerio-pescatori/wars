export const vectorAffinity = (
  vectorA: (number | null)[],
  vectorB: (number | null)[],
): number => {
  const long = vectorA.length > vectorB.length ? vectorA : vectorB;
  const short = vectorA.length > vectorB.length ? vectorB : vectorA;
  if (long.length === 0) return 1;
  const identicals = long.reduce<number>(
    (acc, _, i) => acc + Number(long[i] === short[i]),
    0,
  );
  return identicals / long.length;
};

// ([1 2 3 4 5], [1 2 2 4 3]) => 0.6
// ([1 2 3], [1 2 3]) => 1.0
// [6,6,6,6,6,6],[6]
console.log(vectorAffinity([], []));
