//test: npm test ./__tests__/shrink.test.js

const { shrink } = require('../src/index')

describe('shrink', () => {
  it('removes letters from the string', () => {
    expect(shrink('Bolossom', 2, 5)).toBe('Boom')
    expect(shrink('Blossom')).toBeFalsy
  })
})
