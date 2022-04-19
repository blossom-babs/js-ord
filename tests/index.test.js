const { ord, ordFrom } = require('../index')

describe('#index', () => {
  it('expects the ascii value', () => {
    expect(ord('a')).toBe(97)
    expect(ord('A')).toBe(65)
  })
  it('expects the character of ascii value', () => {
    expect(ordFrom(65)).toBe('A')
    expect(ordFrom(97)).toBe('a')
  })
})

