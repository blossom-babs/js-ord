const { isUpper } = require('../src/index')

describe('check string case', () => {
  it('checks if a string is uppercase', () => {
    expect(isUpper('BOOM')).toBe(true)
    expect(isUpper('bOom')).toBe(false)
  })
})