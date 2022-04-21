const { isUpper, isLower } = require('../src/index')

describe('check string case', () => {
  it('returns true if string is uppercase', () => {
    expect(isUpper('BOOM')).toBe(true)
    expect(isUpper('bOom')).toBe(false)
  })

  it('returns true if string is lowercase', () => {
    expect(isLower('boom')).toBe(true)
    expect(isLower('Boom')).toBe(false)
  })
})