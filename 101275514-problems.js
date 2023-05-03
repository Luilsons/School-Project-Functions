"use strict";

// Function 1: Find the number of digits in an Argument
// Imput
function _findNumOfDigits(address) {
  // Processing info
  if (isNaN(address)) {
    let flag = address.match(/\d/g);
    if (flag != null) {
      return flag.length;
    }
    return 0;
  }
  // Output
  return address.toString().length;
}

// Function 2: Surplus Function
// Imput
function _surplus(str) {
  //Processing info
  return function inner() {
    return str;
  };
}

// Function 3: Strings with Numbers
// Input
function _strNumbers(array) {
  let newArray = [];
  // Processing info
  for (let item of array) {
    if (item.match(/\d/g) != null) {
      newArray.push(item);
    }
  }
  // Output
  return newArray;
}

// Function 4: Class Granding
// Input
function _determineClassGrading(array) {
  let passingGrades = 0;
  let failingGrades = 0;
  let overall = 0;
  // Processing info
  for (let grade of array) {
    overall += grade;
    if (grade >= 50) {
      passingGrades++;
    } else {
      failingGrades++;
    }
  }

  overall = overall / array.length;
  overall = parseFloat(overall.toFixed(1));
  // Output
  console.log([passingGrades, failingGrades, overall]);
}

// Function 5: Move Capital Letters
// Input
function _moveCapitalLetters(str) {
  let upperCase = "";
  let lowerCase = "";
  // Processing Info
  for (let letter of str) {
    if (letter == letter.toUpperCase()) {
      upperCase += letter;
    } else {
      lowerCase += letter;
    }
  }
  // Output
  return upperCase + lowerCase;
}
