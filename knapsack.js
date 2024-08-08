// https://exercism.org/tracks/javascript/exercises/knapsack/edit

//
// This is only a SKELETON file for the 'Knapsack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const knapsack = (maximumWeight, items) => {
  const weights = [];
  const values = [];
  items.forEach((item) => {
    weights.push(item.weight);
    values.push(item.value);
  });
  const n = weights.length;
  const dp = Array.from({ length: n + 1 }, () =>
    Array.from({ length: maximumWeight + 1 }, () => 0)
  );

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= maximumWeight; j++) {
      if (weights[i - 1] <= j) {
        dp[i][j] = Math.max(
          values[i - 1] + dp[i - 1][j - weights[i - 1]],
          dp[i - 1][j]
        );
      } else dp[i][j] = dp[i - 1][j];
    }
  }

  return dp[n][maximumWeight];
};
