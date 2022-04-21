const isUpper = string => {
  try {
    if (typeof string === 'string') {
      return string === string.toUpperCase() || false
    } else {
      return 'Invalid format. Expected string input'
    }
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = isUpper