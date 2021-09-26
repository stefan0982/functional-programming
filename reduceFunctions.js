// 3. implement map, filter, every, some function using reduce under the hood

// helper data
const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

// map
const mapWithReduce = ( array, fn ) => {
  return array.reduce( ( accumulator, currentValue ) => {
    return [ ...accumulator, fn(currentValue) ];
  }, [] );
};
const multiplyBy2 = number => number * 2
console.log( mapWithReduce( numbers, multiplyBy2 ) );

// filter
const filterWithReduce = (array, fn) => {
  return array.reduce( ( accumulator, currentValue ) => {
    if ( fn(currentValue) ) {
      return [ ...accumulator, currentValue ];
    } else {
      return [...accumulator]
    }
  }, [] );
};
const higherThan5 = number => number > 5
console.log(filterWithReduce(numbers, higherThan5));

// every
const everyWithReduce = (array, fn) => {
  return !array.reduce( (accumulator, currentValue) => {
    return [...accumulator, fn( currentValue )]
  }, [] )
  .includes( false )
}

// another implementation, but do not use reduce at full potential
// const everyWithReduce = (array, fn) => {
//   const response = []
//   array.reduce((_, currentValue ) => {
//     response.push(fn(currentValue))
//   }, 0)
//   return !response.includes(false)
// }

const everyNumberIs5 = number => number === 5
const everyItemIsNumber = number => typeof number === 'number'

console.log( everyWithReduce( numbers, everyNumberIs5 ) )
console.log( everyWithReduce( numbers, everyItemIsNumber ) )

// some
const someWithReduce = (array, fn) => {
  return array.reduce( (accumulator, currentValue) => {
    return [...accumulator, fn( currentValue )]
  }, [] )
  .includes( true )
}

const someStrings = value => typeof value === 'string'
console.log( someWithReduce( numbers, someStrings ) )





