function ackermann(x, y) {
  return y === 0
    ? 0
    : x === 0
    ? 2 * y
    : y === 1
    ? 2
    : ackermann(x - 1, ackermann(x, y - 1));
}

console.log("A(1, 10):", ackermann(1, 10));
console.log("A(2, 4): ", ackermann(2, 4));
console.log("A(3, 3): ", ackermann(3, 3));

function f(n) {
  // n * 2
  return ackermann(0, n);
}

function g(n) {
  // n²
  return ackermann(1, n);
}

function h(n) {
  // 2^h(n-1) wobei n >= 1
  // Beispiele:
  // h(1) = 2¹  = 2
  // h(2) = 2²  = 4
  // h(3) = 2⁴  = 16
  // h(4) = 2¹⁶ = 65536
  return ackermann(2, n);
}

function k(n) {
  // 5n²
  return 5 * n * n;
}
