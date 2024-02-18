function shortestTime(n, m, speeds) {
  const [a, b, c, d] = speeds;

  // Calculate the time taken by the elevator
  const elevatorTime = a * Math.abs(m - n) + b + c + a * (n - 1) + b;

  // Calculate the time taken by walking
  const walkingTime = d * (n - 1);

  // Return the shortest time
  return Math.min(elevatorTime, walkingTime);
}

// Test cases
console.log(shortestTime(5, 6, [1, 2, 3, 10])); // Output: 12
console.log(shortestTime(1, 6, [1, 2, 3, 10])); // Output: 0
console.log(shortestTime(5, 4, [2, 3, 4, 5])); // Output: 20
