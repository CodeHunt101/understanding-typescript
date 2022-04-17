function add(n1: number, n2: number) {
  const result = n1 + n2
  return result
}

// Hover over this function, you'll see the type void
function printResult(num: number) {
  console.log("Result: " + num)
}

printResult(add(5, 12))

// Here we tell that the next variable will take a function that accepts two number types as parameters and returns a number
let combineValues: (a: number, b: number) => number

combineValues = add

console.log(combineValues(8, 8))

// We can specify types of callbacks like this
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2
  cb(result)
}

addAndHandle(10, 20, (result) => {
  console.log(result)
})
