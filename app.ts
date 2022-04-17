function add(n1: number, n2: number) {
  const result = n1 + n2
  return result
}

// Hover over this function, you'll see the type void
function printResult(num: number) {
  console.log('Result: ' + num)
}

printResult(add(5,12))