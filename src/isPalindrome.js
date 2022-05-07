const isPalindrome = string => {
  try {
    let stack = []

    for (let i = string.length - 1; i >= 0; i--) {
      stack.push(string[i])
    }

    return stack.join('')

  } catch (error) {
    throw new Error('Unknown value')
  }
}

module.exports = isPalindrome