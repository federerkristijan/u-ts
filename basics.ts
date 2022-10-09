// Primitives
// ':' type assignment && '=' value assignment
let age: number = 42;

// capital String points at JS Object, small string points at type
let userName: string;

let isReal: boolean;

isReal = true;

// complex types

// array of strings
let hobbies: string[];

hobbies = ['sleeping', 'eating', 'coding'];

// defining type as an object
let person: {
  name: string,
  age: number
};

// defining an array of objects
let people: {
  name: string,
  age: number
}[];

// Type inference -> type is defined by the value alone

let course = 'Typescript course'

// union types

let example: string | number = 'This is example';
example = 1;

// Type aliases
// making an object type definition
type PuppyType = {
  name: string,
  age: number
};

let puppyVariable: PuppyType;

// Function & types

// function add(a: number, b: number) {
//   return a + b;
// };

// function printOutput(value: any) {
//   console.log(value);
// }

// Generics

// <> -> defining a generic type
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
};

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);

const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd')

// updatedArray[0].split('');
