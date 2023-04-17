//! For checking error
// @ts-nocheck
// Write a message to the console.
//! This code is for making print = console.log

var print = function printToConsole(parameter) {
  return printToConsole = console.log(parameter)
}


function add(a, b) {
  return a + b;
}

function average(c, d, ___) {
  return add(c, d) / 2;
}
print(average(10, 20))
print(" hello world")

print(average(45, 50))
print(add(45, 50))
print("Today na the dey")


var arr = ["car1", "car2", "car3", "car4", "car5"]
for (let i = 0; i < arr.length; i++) {
  // const element = arr[i];
  const msg = " just one of them"
  print(arr[i] + msg);
}
print(" ")

// forEach(element => arr){
//   print(_element + " just one of them")
// }
arr.forEach(function (b) {
  print(b)
}
)