type NextPrime = { nextPrime: number; distance: number };

const nextPrimes: Record<number, NextPrime> = {
  0: { nextPrime: 2, distance: 2 },
  1: { nextPrime: 2, distance: 1 },
  2: { nextPrime: 3, distance: 1 },
  3: { nextPrime: 5, distance: 2 },
};
const primes: Record<number, boolean> = {};

// if n > 3 is an integer, then there always exists at least one prime number p with n < p < 2n − 2
const getNextPrimeNumber = (n: number): NextPrime => {
  if (nextPrimes[n]) return nextPrimes[n];
  // find the first prime p between n and 2n-2
  // then return p and the distance p - n
  for (let p = n + 1; p < 2 * n - 2; p++) {
    if (isPrimeNumber(p)) {
      nextPrimes[n] = { nextPrime: p, distance: p - n };
      return nextPrimes[n];
    }
  }
  throw new Error("unreachable");
};

// trial division: given an input number, n, check whether it is divisible by any prime number between 2 and n sqrt
// (i.e., whether the division leaves no remainder)
const isPrimeNumber = (n: number): boolean => {
  if (primes[n]) return true;
  const sqrd = Math.sqrt(n);
  for (let i = 2; i <= sqrd; i++) {
    if (n % i === 0) {
      primes[n] = false;
      return false;
    }
  }
  primes[n] = n >= 2;
  return n >= 2;
};

/**
 * @returns the first g-gap
  
 */
export const gap = (g: number, n: number, m: number): [number, number] | null => {
  // 1. start counting i from n, check if it is prime, if yes
  // 2. find the next prime (and calc the distance)
  // 3. if the gapCount matches with g return the couple [i, i1]
  // 4. otherwise if the gapCount is still < g go back to step 2
  // 4. otherwise increase i and go back to step 1
  let i = n;
  if (!isPrimeNumber(i)) {
    const { nextPrime } = getNextPrimeNumber(n);
    i = nextPrime;
  }
  while (i < m) {
    const { nextPrime, distance } = getNextPrimeNumber(i);
    if (distance === g) {
      return [i, nextPrime];
    }
    i = nextPrime;
  }

  return null;
};

// [359, 367]
console.log(gap(8, 300, 400));
