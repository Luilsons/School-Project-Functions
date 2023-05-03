"use strict";

const chai = window.chai;
const expect = chai.expect;


// Test function 1
describe('_findNumOfDigits', () => {
    it('This function returns the count of the number of digits back to the caller.', () => {
        expect(_findNumOfDigits("146 Kendal St 2")).to.deep.equal(4)
    })
})

// Test function 2
describe('_surplus', () => {
    it('This function returns a function, that returns the original str argument', () => {
        expect(_surplus("orange")()).to.deep.equal("orange")
    })
})

// Test function 3
describe('_strNumbers', () => {
    it('This function returns a new array that contains the strings, from the source array, that contained numbers in them', () => {
        expect(_strNumbers(["a", "a1", "b", "b2", "c", "c2"])).to.deep.equal(['a1', 'b2', 'c2'])
    })
})

// Test function 4
describe('_determineClassGradings', () => {
    it('This function n displays the count for the number passing grades, failing grades and overall class average', () => {
        expect(_determineClassGrading([35, 45, 25, 10, 6, 33])).to.deep.equal()
    })
})

// Test function 5
describe('_moveCapitalLetters', () => {
    it('This function returns the domain of an address', () => {
        expect(_moveCapitalLetters("shOrtCAKE")).to.deep.equal("OCAKEshrt")
    })
})