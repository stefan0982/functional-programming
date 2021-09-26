const fibonacci = (number) => {
  if ( number <= 1 ) {
    return number;
  }
  return fibonacci(number - 2  ) + fibonacci(number - 1)
}

console.log( fibonacci( 7 ) );

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

// The next number is found by adding up the two numbers before it:
// the 2 is found by adding the two numbers before it (1+1),
// the 3 is found by adding the two numbers before it (1+2),
// the 5 is (2+3)


// input 6
// - fibonacci(4) + fibonacci(5)
// - ( fibonacci(2) + fibonacci(3) ) + ( fibonacci(3) + fibonacci(4) )
// - ( ( fibonacci(0) + fibonacci(1) ) + ( fibonacci(1) + fibonacci(2) ) + ( ( fibonacci(1) + fibonacci(2) ) + ( fibonacci(2) + fibonacci(3) )
// -          0       +      1         +       1        +        1       +         1        +      1         +        1       +  (  1 +  1 )
// result 8