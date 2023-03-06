let fib_recursive_calls = 0;
function fib_recursive(n) {
  fib_recursive_calls++;
  return n === 0
    ? 0
    : n === 1
    ? 1
    : fib_recursive(n - 1) + fib_recursive(n - 2);
}

let fib_iterative_calls = 0;
function fib_iterative(n) {
  fib_iterative_calls++;
  return fib_iter(1, 0, n);
}

function fib_iter(a, b, count) {
  fib_iterative_calls++;
  return count === 0 ? b : fib_iter(a + b, a, count - 1);
}

console.log("Recrusive:", fib_recursive(50), "Calls:", fib_recursive_calls);
console.log("Iterative:", fib_iterative(50), "Calls:", fib_iterative_calls);
