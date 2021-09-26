//  implement compose function compose(...functions)([])

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8 ];

// functions for test
const arraySum = array => array.reduce(
    ( accumulator, currentValue ) => accumulator += currentValue, 0 );
const numbersHigherThan4 = array => array.filter( number => number > 4 );



const compose = ( ...functions ) => {
  return ( array ) => {
    // if you want to have result as a string ->
    // return functions.map( fn => fn( array ) ).join(',');

    // if you want to have result as an array ->
    return functions.map( fn => fn( array ) );
  };
};

console.log( compose( arraySum, numbersHigherThan4 )( numbers ) );