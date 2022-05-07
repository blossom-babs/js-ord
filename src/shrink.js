const shrink = (string, startIdx, endIdx) => {
  try {
    if (!endIdx) { endIdx = string.length }
    const firstWord = string.slice(0, startIdx)
    const secondWord = string.slice(endIdx + 1, string.length)
    return firstWord + secondWord
  } catch (error) {
    throw new Error('Expects function to have 1 string and atleast 1 integer')
  }
}

module.exports = shrink