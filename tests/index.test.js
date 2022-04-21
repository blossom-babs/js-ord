const { ord, ordFrom } = require('../src/index')

describe('#index', () => {
  it('expects the ascii value', () => {
    expect(ord('a')).toStrictEqual('a'.charCodeAt())
    expect(ord('a')).toBe(97)
    expect(ord(97)).toStrictEqual('Invalid format. Expected string.')
  })
  it('expects the character of ascii value', () => {
    expect(ordFrom(65)).toStrictEqual(String.fromCharCode(65))
    expect(ordFrom(97)).toBe('a')
  })
})

