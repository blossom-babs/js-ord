//Test: npm test ./__tests__/isPalindrome.test.js

const { isPalindrome } = require("../src/index");

describe('isPalindrome', () => {
  it('expects to recieve a string', () => {
    expect(isPalindrome('racecar')).toBe('racecar')
    expect(isPalindrome('blossom')).toBe('mossolb')
  })
})