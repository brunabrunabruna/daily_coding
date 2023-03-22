import "./style.css";


//day 3 / 21/03/2023

// const sum = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(sum(1, 3));

// -------------------------------

// const highest = (array) => {
//   let currentHighest = 0;

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] >= currentHighest) {
//       currentHighest = array[i];
//     }
//   }
//   return console.log(currentHighest);
// };

// highest([1, 2, 3,2,4]);

// -------------------------------

// const findLongestString = (arrayOfStrings: string[]) => {
//   let currentString = '';

//   for (let i = 0; i < arrayOfStrings.length; i++) {
//     if (arrayOfStrings[i].length > currentString.length) {
//       currentString = arrayOfStrings[i];
//     }
//   }

//   return console.log(currentString);
// };

// findLongestString(['hi','hello','yo','jhgdkdhf'])

// -------------------------------

// const reverseString = (string: string) => {
//   let newArray = [];

//   for (let i = 0; i < string.length; i++) {
//     newArray.unshift(string[i]);
//   }
//   return console.log(newArray.join(''));
// };

// reverseString("hello");

// -------------------------------

// const evenNumbers = (array: []) => {
//   let evenNumbersArray = [];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       evenNumbersArray.push(array[i]);
//     }
//   }
//   return console.log(evenNumbersArray);
// };

// evenNumbers([1,2,3,4,5,6])

// -------------------------------

// day 4 // 22/03/2023

let highestNumber = -Infinity;
  let secondHighestNumber = -Infinity;
const secondHighest = (array: []) => {
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] > highestNumber) {
      secondHighestNumber = highestNumber;
      highestNumber = array[i];
    } else if (array[i] > secondHighestNumber) {
      secondHighestNumber = array[i];
    }
  }

};
secondHighest([1,2,3,4,5,6])

console.log(secondHighestNumber);

// -------------------------------

const startsWithA =(array:[])=>{

  for (let i = 0; i < array.length; i++) {

    
if(){}

  }




}