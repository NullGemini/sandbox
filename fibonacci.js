function fibonacci(n) {

  let last = 1;
  let total = 0;
  let count = 0;

  while ( count < n) {
    let temp = total;
    total = total + last;
    last = temp;
    count += 1;
  }
  
  return total;
}

console.log( fibonacci(10) );