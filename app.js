function add(n1, n2) {
    var result = n1 + n2;
    return result;
}
// Hover over this function, you'll see the type void
function printResult(num) {
    console.log('Result: ' + num);
}
printResult(add(5, 12));
// Here we tell that the next variable will take a function that accepts two number types as parameters and returns a number
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) { console.log(result); });
